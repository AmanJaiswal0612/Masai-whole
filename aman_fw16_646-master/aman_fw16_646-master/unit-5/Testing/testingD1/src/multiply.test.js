const {test,expect,describe}= require("@jest/globals")

const multiply= require("./multiply")


describe("testing multiply",()=>{
    test("check multiply",()=>{
        expect(multiply(2,2)).toBe(4)
    })
    test("check multiply",()=>{
        expect(multiply(2,6)).toBe(12)
    })

})
