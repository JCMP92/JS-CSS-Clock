const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    let seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //console.log(seconds);

    let minute = now.getMinutes();
    const minutesDegrees = ((minute/60)*360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hour = now.getHours();
    const hourDegrees = ((hour/12)*360) + ((minute/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate, 1000);

setDate();