class School{

    #privateValue = 100

    constructor(name, year, city){
        this.name = name
        this.year = year
        this.city = city
        this.count = ++this.constructor.countValue;
        this.num = this.#getNum()
    }

    getSchool(){
        return this.name + " " + this.year + " "  + this.city
    }

    #getNum(){  // private Function 
        return 10
    }


    static countValue = 0
    static count (){
        return ++this.countValue
    }
}

const objSchool =  new School("xyz", 2022, "pune")


console.log(objSchool)

const copyObj = {...objSchool}

console.log(copyObj)

console.log(School.count())  //1
console.log(School.count())  //2
console.log(School.count())  //3
console.log(School.count())  //4



console.log(objSchool instanceof School)
console.log(copyObj instanceof School)





//symbol datatype

let key = Symbol() 

let obj = {}

obj.name = "dipak"
obj.salary = 2000
obj[key] = "this fields key is hidden !"

console.log(Object.keys(obj))
console.log(obj)

for( let val in obj){
    console.log(val)
}

let symbol1 = Symbol()
let symbol2 = Symbol()

console.log(symbol1 === symbol2) //false -- creates a new unique value each time you call


let s1 = Symbol.for("ssn")
let s2 = Symbol.for("ssn")

console.log(s1 === s2) // true

console.log(Symbol.keyFor(s1)) // ssn

 



// Iterators & Generators


const iterator = {
    count : 0,
    next : function(){
        return {
            value : ++this.count,
            done : this.count > 10
        }
    }
}

let iter = iterator.next()

while(!iter.done){
    console.log(iterator.count)
    iter = iterator.next()
}


// generator functions

function* generator(){
    console.log("test 1")
    yield 1;
    console.log("test 2")
    yield 2;
}

for(let val of generator()){
    console.log(val)
}



class Bag {
    constructor() {
        this.products = [];
    }
    isEmpty() {
        return this.products.length === 0;
    }
    add(element) {
        this.products.push(element);
    }
    * [Symbol.iterator]() {
        for (let element of this.products) {
            yield element;
        }
    }
}

let bag = new Bag();

bag.add("AXS");
bag.add("ABX");
bag.add("SSD");

for (let e of bag) {
    console.log(e);
}


function* getNextValue(){
    let a = 0
    while(a < 10 ){
        a++
        yield a 
    }
}

let gen = getNextValue()

for(let val of getNextValue()){
    console.log(val)

}
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


// Promise Chaining

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("RESOLVE")
    },2000)
})

promise.then((value)=>{
    return value + "~" + 1
}).then((value)=>{
    return value + "~" + 2
}).then((value)=>{
    console.log(value)
})


// Promise all method ( Parallel Promises )

const p1 = new Promise((resolve, reject)=>resolve("P1 IS RESOLVE"))
const p2 = new Promise((resolve, reject)=>resolve("P2 NOT IS RESOLVE"))
const p3 = new Promise((resolve, reject)=>resolve("P3 IS RESOLVE"))
const p4 = new Promise((resolve, reject)=>resolve("P4 IS RESOLVE"))

Promise.all([
    p1,p2,p3,p4
]).then((value)=>{
    console.log(   "with all Method" + " " + value)
}).catch((err)=>{
    console.log(err)
})


// promise race method


const p5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P5 is resolve")
    },10000)
})

const p6 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("P6 is resolve")
    },7000)
})
const p7 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P9 is resolve")
    },2000)
})
const p8 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P8 is resolve")
    },5000)
})


Promise.race([
    p5, p6, p7, p8
]).then((value)=>{
    console.log(   "with race Method" + " " + value)
}).catch((err)=>{
    console.log(err)
})


Promise.any([
    p5, p6, p7, p8
]).then((value)=>{
    console.log(   "with any Method" + " " + value)
}).catch((err)=>{
    console.log(err)
})


//  Settled Promises

Promise.allSettled([
    p5, p6, p7, p8
]).then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.log(err)
})



// ES6 collections
// map
let map = new Map()

map.set("name", "AAA")
map.set("salary", 2000)
map.set("num1", 2)
map.set("num2", 3)

console.log(map)

map.delete("name")

for(let val of map.keys()){
    console.log(val)
}

for(let val of map.values()){
    console.log(val)
}

for(let [key , value] of map.entries()){
    console.log(`KEY  = ${key} ---- VALUE = ${value}`)
}


console.log(` num1 field is persent ? --  ${ map.has("num1") }`)

console.log(` value of salary is ${map.get("salary")}`)

map.clear()

console.log(map)



// set
let set = new Set()

set.add(1)
set.add(2)
set.add(1)
set.add(4)
set.add(2)
set.add(5)
set.add(8)
set.add(4)
set.add(9)
set.add(5)

console.log(set)

set.delete(1)

console.log(set)

console.log(set.size)

console.log(`2 is persent  ${set.has(2)}`)

for(let [key, value] of set.entries()){
    console.log(`${key} -- ${value}`)
}
set.clear()

console.log(set)


// Array extensions

//Array.of() – flat, flatMap.

let arr = Array.of(1,2,3,4,5,6,7,8,9)

console.log(arr)
console.log(arr.length)
console.log(arr.join("~"))
console.log(arr.reverse())

const sum = arr.reduce((acc, iter)=>acc + iter)
const then5 = arr.filter((value)=>value> 5)
const add5 = arr.map((val)=> val+5)

console.log(`sum of arr is  - ${sum }`)
console.log(`arr value grater then 5 - ${then5}`)
console.log(`add 5 in arr - ${add5}`)

const newArr = Array.from(arr, val=>{
    return val + 10000
})

console.log(` new Arr  --- ${newArr}`)


let arr1 = [233,4,5,3,3,[2323,34,334, [ 2334,2334,23,3]]]

console.log(arr1.flat(2))

let num = [1,2,3,4,5]
let numStr = ["ONE", "TWO", "THREE", "FOUR", "FIVE"]

const numArry = num.flatMap((value,index)=> [value, numStr[index]])

console.log(numArry)

console.log(numArry.findIndex(val=>val === "ONE"))

console.log(numArry.find(val=>val === "ONE"))



// Object extensions

const obj10 ={
    name : "AB",
    salary:2000,
}
const obj20 ={
    gender : "male",
    name:"aaa"
}
const obj30 ={
    newOne : "lll",
    play:"aaa"
}

const newObj = Object.assign(obj10, obj20, obj30)
console.log(newObj)

console.log(Object.is(1, 1))


// String extensions 

const str = "hello my name is xyz"

console.log(str.startsWith("hello"))
console.log(str.endsWith("xyz"))
console.log(str.split(" "))
console.log(str.includes("my"))
console.log(str.toUpperCase())