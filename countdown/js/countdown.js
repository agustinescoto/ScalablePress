//In the variable below, you have to modify the date, and put a date greater than today's date.
//You can add the time too (Example: "Jan 29, 2019 18:26:30 GMT-0600").
//GTM means your time zone.
var countDownDate = new Date("Jan 29, 2019 18:26:30 GMT-0600").getTime();


var countDown = setInterval(function() {

    var now = new Date().getTime();

    var remainTime = countDownDate - now;

    var days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainTime % (1000 * 60)) / 1000);


    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if (remainTime < 0) {
        clearInterval(countDown);
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("minute").innerHTML = "0";
        document.getElementById("second").innerHTML = "0";
        document.getElementById("timeout").innerHTML = "Time Out";
    }
}, 1000);