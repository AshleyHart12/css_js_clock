
function second_hand() {
    var current_position = document.getElementById('second').style.transform;
    document.getElementById('second').style.transform = current_position + 'rotate(1deg)';
}

function minute_hand() {
    var current_position = document.getElementById('minute').style.transform;
    document.getElementById('minute').style.transform = current_position + 'rotate(1deg)';
}

function hour_hand() {
    var current_position = document.getElementById('hour').style.transform;
    document.getElementById('hour').style.transform = current_position + 'rotate(5deg)';
}

setInterval(second_hand, 1000);
setInterval(minute_hand, 60000);
setInterval(hour_hand, 3.6e+6);

