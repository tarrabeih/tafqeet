const tafqeet = require('./index.js');

// Test cases
const testNumbers = [123, 1234, 12345, 123456, 1234567, 12345678, 123456789];

testNumbers.forEach(num => {
    const result = tafqeet.tafqeet(num);
    console.log(`${num} → ${result.fullText}`);
});