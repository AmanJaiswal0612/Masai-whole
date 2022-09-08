const validate = require("../src/Passvalidate");

const {test,expect,describe}= require("@jest/globals")

describe("check password",()=>{
    test("All condition satisfied",()=>{
        expect(validate("aaaaaa1A").status).toBe(true);
        expect(validate("aaaaaa1A").message).toBe("Password is correct");
    })
     
    

    test("Need a lowercase char",()=>{
        expect(validate("ABCDE1AA").status).toBe(false);
        expect(validate("ABCDE1AA").message).toBe("at least 1 lowercase require");
    })

    test("Need 8 chars",()=>{
        expect(validate("1adB").status).toBe(false);
        expect(validate("1adB").message).toBe("min 8 chars require");
    })
    
    test("Need a upperCase",()=>{
        expect(validate("abcdefg1").status).toBe(false);
        expect(validate("abcdefg1").message).toBe("at least 1 uppercase require")
    })
    
})