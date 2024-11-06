//JavaScript Constructor Function


function Person(firstName, lastName){
    if(!new.target){
        throw Error("Cannot be called without the new keyword");
    }
    this.firstName = firstName
    this.lastName =lastName
    this.getFullName = function(){
        return this.firstName + " " + this.lastName
    }
}

const person = new Person("Ashish","Xyz") 
console.log(person)
console.log(person.getFullName())

 const person2 = Person("name", "test")
 console.log(person2)