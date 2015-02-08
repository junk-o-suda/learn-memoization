#!/usr/bin/env node


var memoize = require('./memoize'),

    iterations = 35,

    fibonacci = function(n) {
        return (2 > n) ? n : fibonacci(n - 1) + fibonacci(n - 2);
    },

    memoized_fibonacci = memoize(function(n) {
        return (2 > n) ? n : memoized_fibonacci(n - 1) + memoized_fibonacci(n - 2);
    });

console.time('non-memoized');
console.log(fibonacci(iterations));
console.timeEnd('non-memoized');

console.time('memoized');
console.log(memoized_fibonacci(iterations));
console.timeEnd('memoized');
