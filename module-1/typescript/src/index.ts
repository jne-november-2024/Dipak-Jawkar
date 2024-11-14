let num: number = 20;
let num1: number = 21;

console.log(num + num1)

// array
let arr: number[] = [1, 2, 3, 4, 45, 5, 5]
console.log(arr)
let arr1: [number, string] = [1, "dipak"]
arr1.push("helllo")
console.log(arr1)


// Enum 
const enum Size { Small = "S", Medium = "M", Large = "L" }
let mySize: Size = Size.Medium
console.log(mySize)


// function

const sumTowNum = (a: number, b: number): number => {
    return a + b;
}

console.log(sumTowNum(1, 3))


// object

const obj: {
    readonly id: number, // cant change id (readonly)
    name?: string // filed is optional
    fun: (age: number) => void
} = {
    id: 0,
    fun: (age) => age
}

obj.name = "hello"
console.log(obj.fun(10))

// type Aliases

type Employee = {
    id: number,
    name: string
}

const obj2: Employee = {
    id: 2,
    name: "BAC"
}

const obj3: Employee = {
    id: 3,
    name: "ACS"
}

// union types

const weightIs = (w: number | string): number => {
    if (typeof w === "number") {
        return w
    } else {
        return parseInt(w);
    }
}

console.log(weightIs(1))
console.log(weightIs("10kg"))


// intersection type

type Addnum = {
    id: number

}
type removeNum = {
    name: string
}

type addRemoveNum = Addnum & removeNum

const val: addRemoveNum = {
    id: 1,
    name: "hello"
}


// Literal types

type Gender = "male" | "female"
const gender: Gender = "male"
const gender1: Gender = "female"



const emp: object = {
    "name": "dipak"
}



let obbb: {
    name: string,
    id: number
}

obbb = {
    name: "dipak",
    id: parseInt("1")
}

console.log(obbb)



// const multiFun = (a : string):(string | number | boolean) =>{
//     return a
// }


// class

class Collage {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }

    getInfo(): string {
        return `collage is ${this.name} and id  is ${this.id}`
    }
}

const collage = new Collage("skn", 1)

console.log(collage.getInfo())


class School {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }

    get getname(): string {
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }

    get getId(): number {
        return this.id
    }

    set setId(id: number) {
        this.id = id
    }
    public getInfo(): string {
        return this.id + this.name
    }
}

const school = new School("", 1)
school.setId = 1
school.setName = "dipak"

console.log(school.getname)
console.log(school.getId)
console.log(school.getInfo())



abstract class Student {
    constructor(a?: string) {
        console.log(a)
    }
    abstract add(): string
}


class Mathh extends Student {

    constructor() {
        super("hello")
    }

    add(): string {
        return "success"
    }
}

const math = new Mathh()

interface RequestBody<T extends object> {
    data: T,
    status: boolean
}

const response: RequestBody<{ name: string, id: number }> = {
    data: {
        name: "dipak",
        id: 1
    },
    status: true
}

console.log(response)
const map = new Map<string, number>();

map.set("name", 1);

console.log(map.get("name"));



const getFirstFromArr = <T>(arr: T[]): T | null => {
    return arr?.find((_, index) => index === 0) || null;
}

console.log(getFirstFromArr(["hello", 3, 4, 5, 7, 5]))
console.log(getFirstFromArr(["hello", 3, 4, 5, 7, 5]))

console.log(getFirstFromArr([3, 4, 5, 7, 5]))

console.log(getFirstFromArr([4, 5, 7, 5]))


interface Pen<T>{
    color : T
}

const penFun = <T extends Pen<any>>(name:T):T =>{
    return name
}

console.log(penFun({color:"hello", name : "blue-pen"}))



class User<T, K>{
   private name : T
   private password : K

   constructor(name: T, password: K){
    this.name = name
    this.password = password
   }
   get getName(): T {
    return this.name
   }
   get getPassword() :K{
    return this.password
   }
}

let user = new User("dipak jawkar", 12324443)

console.log(user)



