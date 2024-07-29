
const inputField = document.getElementById('box');
const counter = document.getElementById('counting');
const maxChars = 50;

inputField.addEventListener('input', function() {
let text = inputField.value;
    if (text.length > maxChars) {
         text = text.substring(0, maxChars);
         inputField.value = text;
    }
    const charCount = text.length;
    counter.textContent = `Character Count: ${charCount}`;
    if (charCount >= maxChars) {
        counter.style.color = 'red';
    } 
});
