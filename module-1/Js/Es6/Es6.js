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


map.clear()

console.log(map)



// set
let set = new Set()

set.add(1)
set.add(2)
set.add(1)
set.add(4)
set.add(2)

console.log(set)

set.delete(1)

console.log(set)

console.log(set.size)

set.clear()

console.log(set)






