#!/usr/bin/env node

var radar = require('./radar'),

    speed_alert = function(speed) {
        var limitation = 60;

        return speed > limitation;
    };

radar.on('car_detected', function(car) {
    if(speed_alert(car.speed)) {
        radar.flash();
    }
});

radar.run();
