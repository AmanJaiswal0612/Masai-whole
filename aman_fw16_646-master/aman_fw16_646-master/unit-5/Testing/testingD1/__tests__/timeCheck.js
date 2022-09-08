

const timeConverter= require("../src/timeConverter");

describe("Check Time  Coversion",()=>{

    test("Time less Than 1000",()=>{
        expect(timeConverter(900)).toBe("0seconds")
    })
    test("Time Equal to some minutes",()=>{
        expect(timeConverter(60000*4)).toBe("4minutes")
    })
    test("Time Equal to some Seconds",()=>{
        expect(timeConverter(3721)).toBe("3seconds")
    })

    test("Time In minute - second",()=>{
        expect(timeConverter(200000)).toBe("3 minutes 20 seconds")
    })
    
    test("Time in hour only",()=>{
        expect(timeConverter(7200000)).toBe("2 hours")
    })
    
    test("Time in hour-minute-seconds",()=>{
        expect(timeConverter(3663000)).toBe("1 hours 1 minutes 3 seconds")
    })
    
})

