const arr = [0,2,4,8,6]

const getValuefromArray = (value)=>{
    console.log(value)
} 

const isEven = (value) => value % 2 === 0

// callback

console.log("all array values")
arr.map(getValuefromArray)


if(arr.every(isEven)){
    console.log("all elements are even")
}else{
    console.log("all elements are not even")
}


