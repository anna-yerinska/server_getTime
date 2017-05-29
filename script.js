'use strict';

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var btnSyncTime = document.querySelector('.btn-syncTime'),
        top = document.querySelector('.top'),
        right = document.querySelector('.right'),
        bottom = document.querySelector('.bottom'),
        left = document.querySelector('.left'),
        sides = [
            top,
            right,
            bottom,
            left
        ],
        sidesFull = [];

    btnSyncTime.addEventListener('click', syncTime);

    function syncTime() {
        var xhr = new XMLHttpRequest();

        xhr.open('get', '/get-time', true);
        xhr.send();
        xhr.addEventListener('readystatechange', function() {

            if(xhr.readyState === 4 && xhr.status === 200) {
                if (sidesFull.length >= 1 && sidesFull.length <= 4) {
                    var time = xhr.responseText,
                        i = sidesFull.length;

                    time = time.slice(15, -1);
                    sidesFull.push(sides[i]);
                    sidesFull[i].innerHTML = '<span>Time is </span>' + time;

                } else {
                    var time = xhr.responseText;

                    time = time.slice(15, -1);
                    sidesFull.push(sides[0]);
                    sidesFull[0].innerHTML = '<span>Time is </span>' + time;
                }           
            }
        });
    }
}


