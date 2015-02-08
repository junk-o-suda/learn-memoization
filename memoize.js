module.exports = function(fn, resolver) {
    var memoized = function() {
        var key,
            cache = memoized.cache,
            args = Array.prototype.slice.call(arguments);

        resolver = resolver || JSON.stringify;

        key = resolver.apply(this, args);

        if(!(key in cache)) {
            cache[key] = fn.apply(this, arguments);

            console.log('calculated for ' + key);
        }

        return cache[key];
    };

    memoized.cache = {};

    return memoized;
};
