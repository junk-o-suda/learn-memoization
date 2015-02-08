#!/usr/bin/env node


var radar = require('./radar'),
    memoize = require('./memoize'),

    speed_alert = memoize(function(speed) {
        var limitation = 60;

        return speed > limitation;
    });

radar.on('car_detected', function(car) {
    if(speed_alert(car.speed)) {
        radar.flash();
    }
});

radar.run(10);
