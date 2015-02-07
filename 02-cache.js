#!/usr/bin/env node

var radar = require('./radar'),

    speed_alert = (function() {
        var limitation = 60,
            cache = {};

        return function(speed) {
            if(!(speed in cache)) {
                cache[speed] = speed > limitation;

                console.log('                 calculated');
            }

            return cache[speed];
        };

    }());

radar.on('car_detected', function(car) {
    if(speed_alert(car.speed)) {
        radar.flash();
    }
});

radar.run(10);
