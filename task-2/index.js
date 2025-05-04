const { fizzBuzz } = require('./fizzbuzz');

const max = process.argv[2] ? parseInt(process.argv[2]) : 100;
fizzBuzz(max);
