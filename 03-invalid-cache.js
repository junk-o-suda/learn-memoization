#!/usr/bin/env node

var limitation = 60,

    speed_alert = (function() {
        var cache = {};

        return function(speed) {
            if(!(speed in cache)) {
                cache[speed] = speed > limitation;

                console.log('calculated for ' + speed);
            }

            return cache[speed];
        };

    }());

console.log('70 is over ' + limitation + '? ', speed_alert(70));
console.log('70 is over ' + limitation + '? ', speed_alert(70));

// Changing global value that affect the calculation
limitation = 75;
console.log('70 is over ' + limitation + '? ', speed_alert(70));
