(function() {
    'use strict';

    function clock() {
        const fullDate = new Date();
        var hours = fullDate.getHours();
        var minutes = fullDate.getMinutes();
        var seconds = fullDate.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours.length < 10) {
            hours = '0' + hours;
        }
        document.getElementById('second').innerHTML = seconds;
        document.getElementById('minute').innerHTML = minutes + ':';
        document.getElementById('hour').innerHTML = hours + ':';
    }
    setInterval(clock, 1000);
})();