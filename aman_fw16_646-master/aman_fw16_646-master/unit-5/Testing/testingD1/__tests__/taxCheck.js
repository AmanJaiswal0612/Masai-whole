const tax_calculator = require("../src/tax_calculator");



describe("Finding the tax",()=>{
    test("income less than 250000",()=>{
        expect(tax_calculator(143455,25000)).toBe(0);
    })
    
     
    test("income In B/W 2.5lakh and 5lakh",()=>{
        expect(tax_calculator(400000,20000)).toBe(30000)
    })

    test("income In B/W 5lakh and 10lakh ",()=>{
        expect(tax_calculator(800000,300000)).toBe(110000)
    })

    test("income In B/W %lakhs and 10lakhs",()=>{
        expect(tax_calculator(1200000,400000)).toBe(320000)
    })

})