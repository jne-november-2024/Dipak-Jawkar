const date = new Date()

console.log(date)

console.log(date.toString())

console.log(date.getDate())
console.log(date.getTime())
console.log(date.getMonth())



console.log(Math.PI)
let ab = 4.6

console.log(Math.round(ab))
console.log(Math.ceil(ab))
console.log(Math.floor(ab))
console.log(Math.trunc(ab))

let arr = [2,3454,222,444,55,22,55]

const getMaxNum = (arr) =>{
    let res = Number.MIN_VALUE
    arr.forEach(val =>{
        res = Math.max(res, val)
    })
    return res
}

console.log(getMaxNum(arr))


console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

