import calculator from "./calculator";

test('object that contains arithmetics functions', () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.subtract(12, 2)).toEqual(10);
    expect(calculator.divide(4, 2)).toEqual(2);
    expect(calculator.multiply(2, 4)).toEqual(8);
})