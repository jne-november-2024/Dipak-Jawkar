const obj = {
    name: "Omkar",
    salary: 5000,
    city: "pune"
}

const obj1 = {
    newName: "Tejas"
}


obj.__proto__ = obj1

console.log(obj)


console.log(obj.newName)


console.log(typeof Object.prototype)
console.log(typeof Function.prototype)




console.log(this)

const thisCheck = () => {
    "use strict";
    console.log(this); 

    function display() {
        console.log(this ); 
    }
    display();
}
thisCheck()


console.log(globalThis === this)
console.log(globalThis === window)

