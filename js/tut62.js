console.log("this is clock.js");


function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // current hour , minutes and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds(); 

     
    // paid 0 if minute or second is less than 10(single digit)
     currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
     currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;



     // choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12 ) ? "AM" : "PM";


     // convert railway clock to AM/PM Clock
     currentHour = (currentHour > 12) ?         currentHour - 12 : currentHour;

     currentHour = (currentHour == 0) ? 12 : currentHour;

      

     // prepare the time string  from hors , minutes and second
     let currentTimerStr = currentHour + ":" 
                          + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    document.getElementById("clock").innerHTML = currentTimerStr;

}