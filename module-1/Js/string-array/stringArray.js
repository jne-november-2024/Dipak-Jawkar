const str = "Hello My Name is Dipak"

console.log(str)

console.log(str.at(0))

console.log(str.charAt(0))

console.log(str.includes("My"))

console.log(str.substring(0,2))

console.log(str.slice(0,2))


console.log(str.split(" "))

// Reverse String
const revserStr = (str) => str.split(" ").reverse().join(" ")

// count number of char

let charNum = {}

str.toLocaleLowerCase().replace(" ", "").split("").forEach(val=>{
    if(val in charNum) charNum[val] = charNum[val] + 1
    else charNum[val] =  1
})

console.log(`total char`, charNum)

console.log(revserStr(str))


const arr = [1,2,4,5,6,7,8,5,3,2,6]

console.log(arr.splice(2,0,999))
console.log(arr)

console.log(arr.join("_"))
console.log(arr.findIndex(val=>val === 5))
console.log(arr.reduce((acc, iter, index)=> acc+iter)) // sum




let str5 = "HELLO java SCipt"
let res = str5.toLowerCase()
console.log(res)


