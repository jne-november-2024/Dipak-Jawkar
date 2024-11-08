let users = [
    {
        firstName : 'abhay',
        lastName : 'ahire',
        age : 30,
        email :'bla'
    },
    {
        firstName : 'aaa',
        lastName : 'pqr',
        age : 33
    },    {
        firstName : 'xyz',
        lastName : 'qwe',
        age : 35
    },
]
// higher order
const filterResult = users.filter((value) => value.age > 32)

const newUsers = users.map((user) => {
    
})

users.forEach((user) => {
    
})


let test = [1,2,3,43,5];

let total  = 0; 
test.forEach(t => {
    total = total + t;
})

test.reduce(() => {
    total = total + t;
})

users.filter
users.forEach
users.reduce
users.map
users.flatMap
users.every
users.some
console.log(filterResult)