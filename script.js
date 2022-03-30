// variable declaration for this program
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var hours = document.getElementById("hours");

// displaying the clock
setInterval( function(){
    var date = new Date();
    hours.innerHTML = ( date.getHours() < 10 ) ? "0" + date.getHours() + ":" :  date.getHours() + ":";
    minutes.innerHTML = ( date.getMinutes() < 10 ) ? "0" + date.getMinutes() + ":" :  date.getMinutes() + ":";
    seconds.innerHTML = ( date.getSeconds() < 10 ) ? "0" + date.getSeconds() :  date.getSeconds();
}, 1000 )