const obj = {
    name: "Omkar",
    salary : 5000,
    city : "pune"
}

console.log(obj["name"])
console.log(obj.name)

obj.getGender = (isValue) => isValue ? "male" : "female"




const obj1 = {
    name: "Suraj",
    salary : 5000,
    city : "pune",
    info : function(){
        return this.name + " " + this.city
    }
}

console.log(obj1.info())




for(let key of Object.keys(obj)){
    console.log(key, " " , obj[key] )
}

console.log(obj.getGender(0))


for(let val in obj1){
    console.log(val)
}


let name = "user name"

let obj3 = {
    [name] : "dipak"
}

console.log(obj3)
