

//Timers
const fs= require("fs")

// console.log("before")



// setImmediate(()=>{
//     console.log("immediate")
// })


// console.log("after")


// setTimeout(()=>{
// console.log("timeout")
// },0)



// fs.readFile("text.js", "utf-8",()=>{

//     setTimeout(()=>{
//         console.log("timeout")
//         },0)
        
// //   console.log("alone")


//     setImmediate(()=>{
//         console.log("immediate")
//     })
// })




process.nextTick(()=>{
    console.log("Hello")
})

//message quue mein highest priority hota hai iska sb se nechyte  ye aa jayega web messsage ueue mein