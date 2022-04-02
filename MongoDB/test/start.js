const expect = require('chai').expect;

it('should add numbers correctly', function () {
    const num1 = 2;
    const num2 = 3;
    expect(num1 + num2).to.equal(5);
})
// mocha is ressponsible for running our tests
// and for giving us this IT function that defines where we defines our
// testcode
// Chai is responsible for finding the sucess condition 
