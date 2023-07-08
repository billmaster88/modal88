function makeTimer() {
    var endTime = new Date();
    endTime.setHours(24, 0, 0, 0);
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") hours = "0" + hours; 
    if (minutes < "10") minutes = "0" + minutes; 
    if (seconds < "10") seconds = "0" + seconds; 

    document.getElementById("hours").innerHTML= hours + "<span>giờ</span>";
    document.getElementById("minutes").innerHTML= minutes + "<span>phút</span>";
    document.getElementById("seconds").innerHTML= seconds + "<span>giây</span>";
 }

 makeTimer();

setInterval(function () { 
    makeTimer(); 
}, 1000);