var _events = {
        car_detected: []
    },

    // random_speeds(options) {{{
    random_speeds = function(options) {
        var defaults = {
            count: 5,
            low: 40,
            high: 80,
            round: 5
        };

        if('object' !== typeof options) {
            options = defaults;
        }
        else {
            Object.keys(defaults).forEach(function(key) {
                if(!options.hasOwnProperty(key) || isNaN(options[key])) {
                    options[key] = defaults[key];
                }
            });
        }

        return Array.apply(null, {length: options.count}).map(function() {
            // Random speed
            var speed = Math.random();
            // Within selected range
            speed = (speed * (options.high - options.low)) + options.low;
            // Round values
            speed = parseInt(speed / options.round) * options.round;

            return speed;
        });
    };
    // }}}

module.exports = {

    run: function(car_count) {
        random_speeds({count: car_count}).forEach(function(random_speed) {
            console.log('Car coming in at ' + random_speed + 'Kmph');

            _events.car_detected.forEach(function(func) {
                func({speed: random_speed});
            });
        });
    },

    on: function(event, handler) {
        if(!_events.hasOwnProperty(event)) {
            throw 'Event "' + event + 'Doesn\'t exists';
        }

        // Ignore non-function handlers
        if('function' !== typeof handler) {
            return;
        }

        _events[event].push(handler);
    },

    flash: function() {
        console.log('Speed Warning!');
    }

};
