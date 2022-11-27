export default function analizeArray(array) {
    let average = av(array);
    let min = minimun(array);
    let max = maximun(array);
    let length = array.length;

    return { average, min,  max, length }
}

function av(array) {
    let sum = array.reduce((prev, cur) => prev + cur, 0)
    let average = sum / array.length;

    return average;
}

function minimun(array) {
    let min = array[0];

    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array.length; b++) {
            if (array[a] < array[b] && array[a] < min) {
                min = array[a];
            }
        }
    }

    return min;
}

function maximun(array) {
    let max = array[0];

    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array.length; b++) {
            if (array[a] > array[b] && array[a] > max) {
                max = array[a];
            }
        }
    }

    return max;
}