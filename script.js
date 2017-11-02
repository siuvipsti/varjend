let canvas, ctx;

function differenceD() {
    var now = new Date();
    var date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var date2 = new Date("11/5/2017");
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function differenceM() {
    var now = new Date();
    var month2 = new Date("11/5/2017");
    months = (month2.getFullYear() - now.getFullYear()) * 12;
    return months += month2.getMonth() - now.getMonth();
}

function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds + (milliseconds / 1000);

    // Clock Lines
    ctx.strokeStyle = '#28d1fa';
    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';

    // Background
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, '#09303a');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    //ctx.fillStyle = '#333333';
    ctx.fillRect(0, 0, 500, 1000);
  
    // Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours * 30) - 90));
    ctx.stroke();
  
    // Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes * 6) - 90));
    ctx.stroke();
  
    // Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds * 6) - 90));
    ctx.stroke();
        
    if (hours < 10) {
        hours = "0" + hours;
    }
                
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    //if (day < 10) {
    //    day = "0" + day;
    //}
    
    //Hour / Minute
    ctx.font = "90px HalfLife2 Regular";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(hours + " " + minutes, 145, 285);
    
    //Day / Month
    ctx.font = "30px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(day + " / " + month, 150, 540);
    
    //Line
    ctx.beginPath();
    ctx.moveTo(150, 550);
    ctx.lineTo(455, 550);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#28d1fa';
    ctx.stroke();
    
    //Difference Day
    ctx.font = "30px Arial";
    ctx.fillStyle = "28d1fa";
    ctx.fillText(differenceD(), 150, 780);
    
    //Differenec Day > stick (up to 31 days)
    var scopeD = Math.min(Math.max(parseInt(differenceD()), 0), 31);
    ctx.font = "30px Arial";
    ctx.fillStyle = "28d1fa";
    ctx.fillText(Array(scopeD + 1).join("|"), 150, 580);
    
    //Difference Month
    ctx.font = "30px Arial";
    ctx.fillStyle = "28d1fa";
    ctx.fillText(differenceM(), 150, 800);
    
    //Differenec Month > stick (up to 6 months)
    var scopeM = Math.min(Math.max(parseInt(differenceM()), 0), 6);
    ctx.font = "30px Arial Black";
    ctx.fillStyle = "28d1fa";
    ctx.fillText(Array(scopeM + 1).join("|"), 405, 580);
    
    //date.txt
    //ctx.font = "30px Arial Black";
    //ctx.fillStyle = "28d1fa";
    //ctx.fillText(text(), 405, 600);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 950;
        
    setInterval(renderTime, 40);
}

init();