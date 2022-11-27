export default function capitalized(text) {
    let newText = "";
    
    for(let i = 0; i < text.length; i++) {
        if(i === 0) {
            newText += text[i].toUpperCase();
        } else {
            newText += text[i];
        }
    }

    return newText
}