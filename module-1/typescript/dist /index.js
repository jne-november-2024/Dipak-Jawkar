"use strict";
let num = 20;
let num1 = 21;
console.log(num + num1);
// array
let arr = [1, 2, 3, 4, 45, 5, 5];
console.log(arr);
let arr1 = [1, "dipak"];
arr1.push("helllo");
console.log(arr1);
let mySize = "M" /* Size.Medium */;
console.log(mySize);
// function
const sumTowNum = (a, b) => {
    return a + b;
};
console.log(sumTowNum(1, 3));
// object
const obj = {
    id: 0,
    fun: (age) => age
};
obj.name = "hello";
console.log(obj.fun(10));
const obj2 = {
    id: 2,
    name: "BAC"
};
const obj3 = {
    id: 3,
    name: "ACS"
};
// union types
const weightIs = (w) => {
    if (typeof w === "number") {
        return w;
    }
    else {
        return parseInt(w);
    }
};
console.log(weightIs(1));
console.log(weightIs("10kg"));
const val = {
    id: 1,
    name: "hello"
};
const gender = "male";
const gender1 = "female";
const emp = {
    "name": "dipak"
};
let obbb;
obbb = {
    name: "dipak",
    id: parseInt("1")
};
console.log(obbb);
// const multiFun = (a : string):(string | number | boolean) =>{
//     return a
// }
// class
class Collage {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getInfo() {
        return `collage is ${this.name} and id  is ${this.id}`;
    }
}
const collage = new Collage("skn", 1);
console.log(collage.getInfo());
class School {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    get getname() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    getInfo() {
        return this.id + this.name;
    }
}
const school = new School("", 1);
school.setId = 1;
school.setName = "dipak";
console.log(school.getname);
console.log(school.getId);
console.log(school.getInfo());
class Student {
    constructor(a) {
        console.log(a);
    }
}
class Mathh extends Student {
    constructor() {
        super("hello");
    }
    add() {
        return "success";
    }
}
const math = new Mathh();
const response = {
    data: {
        name: "dipak",
        id: 1
    },
    status: true
};
console.log(response);
const map = new Map();
map.set("name", 1);
console.log(map.get("name"));
const getFirstFromArr = (arr) => {
    return (arr === null || arr === void 0 ? void 0 : arr.find((_, index) => index === 0)) || null;
};
console.log(getFirstFromArr(["hello", 3, 4, 5, 7, 5]));
console.log(getFirstFromArr(["hello", 3, 4, 5, 7, 5]));
console.log(getFirstFromArr([3, 4, 5, 7, 5]));
console.log(getFirstFromArr([4, 5, 7, 5]));
const penFun = (name) => {
    return name;
};
console.log(penFun({ color: "hello", name: "blue-pen" }));
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    get getName() {
        return this.name;
    }
    get getPassword() {
        return this.password;
    }
}
let user = new User("dipak jawkar", 12324443);
console.log(user);
//# sourceMappingURL=index.js.map