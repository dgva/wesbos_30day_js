function setDate() {
    // SECONDS
    const now = new Date();
    const seconds = now.getSeconds();
    const secondHand = document.querySelector('.second-hand'); // Using CSS queries, fectches the elements with the '.second-hand' class. Repeats for minutes and hours
    const secondDegrees = ((seconds / 60) * 360) + 90; // Simple 3 rule: when 15 seconds equals 90 degrees, 30 seconds equals x, in this case, 180 degrees. But then we need to add another 90 degrees, because the div starts from left to right, not top to bottom. In CSS, we also make it llok like the 0 is at the top, but with the JS moving it, it also requires an adjustment. Repeat for minutes and hours
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    // if (seconds == 0) {secondHand.style.transition = `0s`}; // It looks bad overall, so removed it. Repeated on minutes and hours
    console.log('Seconds: ' + seconds);

    // MINUTES
    const mins = now.getMinutes();
    const minsHand = document.querySelector('.min-hand');
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    // if (mins == 0) {minsHand.style.transition = `0s`};
    console.log('Minutes: ' + mins);

    // HOURS
    const hours = now.getHours();
    const hoursHand = document.querySelector('.hour-hand');
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // if (hours == 0) {hoursHand.style.transition = `0s`};
    console.log('Hours: ' + hours); 
    
};

setInterval(setDate, 1000); // By running the function every 1000 milliseconds (1 second) it allows for the function to update everything, and fetch new values for seconds. Because the timer works by getting the date from the system, the interval and the update of the date always work together