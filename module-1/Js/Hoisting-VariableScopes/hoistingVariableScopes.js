
console.log(val) // undefined
var val = "hello"


// console.log(val1) // Uncaught ReferenceError: Cannot access 'val1' before initialization
// let val1 = "hello"



console.log(getVal())

function getVal(){
    return 10;
} 



// call by value
let count = 0;
let val3 = {
    name : "xuz"
}

const getVal3 = (valnew, countNew) =>{
    valnew.name = "zzz"
    countNew = countNew + 1000
}

getVal3(val3, count)
console.log(val3)
console.log(count)