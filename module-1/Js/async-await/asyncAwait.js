const promise = () =>new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([
            { name: "xyz", city: "pune", salary: 2000 },
            { name: "abc", city: "mumbai", salary: 2500 },
            { name: "def", city: "delhi", salary: 3000 },
            { name: "ghi", city: "bangalore", salary: 3500 },
            { name: "jkl", city: "hyderabad", salary: 4000 },
            { name: "mno", city: "chennai", salary: 4500 },
            { name: "pqr", city: "kolkata", salary: 5000 },
            { name: "stu", city: "jaipur", salary: 5500 },
            { name: "vwx", city: "lucknow", salary: 6000 }
        ])
    },3000)
})


const getData = async () =>{
    const res = await promise()
    const newSalary = res.filter(val => val.salary > 5000)
    const newRes = newSalary.map((val, index)=>({
        ...val,
        admin :  index === 0 ? true : false
    }))
    console.log(newRes)
}

getData()