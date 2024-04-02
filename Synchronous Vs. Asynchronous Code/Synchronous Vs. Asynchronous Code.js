// Synchronous Vs. Asynchronous Code*
// Synchronous 
// line by line execution
console.log("A")
console.log("B")
console.log("C")
console.log("D")

// Asynchronous Code*
console.log("Hii");
setTimeout(()=>{
    console.log("Good Afternoon")
}, 4000)
console.log("Good Evening")

