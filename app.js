// for the typing animation in hero image
const typedTextSpan = document.querySelector(".typedText");

const textArray = ["Hello", "Ni hao", "Bonjour", "Hola", "Guten Tag", "Namaste"];
const typingDelay = 200; // delay between typing each character
const erasingDelay = 100; // delay between erasing each character
const newTextDelay = 2000; // delay to the next word
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); 
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay); //erase when you finish typing the character
    };
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1); 
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) { // to re-initialise when reached the end of textArray
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});