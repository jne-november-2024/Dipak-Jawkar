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


