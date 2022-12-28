const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);


    expect(total).toBe(23);
});





test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})



test("One dollar should be 106.58 yen", function(){
    
    const { fromDollarToYen } = require('./app.js')
    
    
    expect(fromDollarToYen(2)).toBe(213.16666666666669); 
})

test("One yen should be 0.00625 pound", function(){
    
    const { fromYenToPound } = require('./app.js')
    
    
    expect(fromYenToPound(5)).toBe(0.03127443315089914); 
})