const {test,expect,describe}= require("@jest/globals")


const add = require("./index")



describe("Test sum function with number",()=>{
    
    test("should work in all numbers",()=>{
        expect(add(2,2)).toBe(4);
    })
    test("should work for another",()=>{
        expect(add(3,5)).toBe(8);
    })

})

describe("Test sum function with string",()=>{

  test("should not work with characters",()=>{
    expect(add("a","b")).toBeUndefined();  
  })

})


