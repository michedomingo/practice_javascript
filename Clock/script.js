const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

// Get current hour, minute, and second with Date() object
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log('Hour: ' + hr + ' Minute: ' + min + ' Second: ' + sec);

// divide the clock into 12 segments for the hour
// hour hand should move up based on what the minutes currently are
// take hour position and add to it the position of the current minute hand
// min times 360/60 gives relative minute position then divide by 12 --> to get current hr segment
let hrPosition = hr * (360 / 12) + (min * (360 / 60)) / 12;
// current # of minutes in an hour muliply by 360 divided by 60 --> gives us min position
// for every full min, the min arm moves along incrementally with the second arm
// take current minute degrees and add to them the number of seconds from section that are added to the clock
// sec multiplied by 360 degress divided by 60 then divide all of that by 60 --> give correct/corresponding component
let minPosition = min * (360 / 60) + (sec * (360 / 60)) / 60;
// # of sec in current min * 360 degress divided by # of sec that could be on clock
let secPosition = sec * (360 / 60); // how many degress are covered by current seconds

// Apply Position numbers HANDS above as degrees in the inline styles
HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
