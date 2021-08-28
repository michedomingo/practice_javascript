const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

// Apply Position numbers HANDS above as degrees in the inline styles
HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
