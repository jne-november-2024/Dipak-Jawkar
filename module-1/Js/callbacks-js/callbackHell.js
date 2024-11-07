const task1 = (callback) =>{
    setTimeout(()=>{
        console.log("task 1 is completed !")
        callback()
    },1000)
}

const task2 = (callback) =>{
    setTimeout(()=>{
        console.log("task 2 is completed !")
        callback()
    },1000)
}

const task3 = (callback) =>{
    setTimeout(()=>{
        console.log("task 3 is completed !")
        callback()
    },1000)
}

const task4 = (callback) =>{
    setTimeout(()=>{
        console.log("task 4 is completed !")
        callback()
    },1000)
}


const task5 = (callback) =>{
    setTimeout(()=>{
        console.log("task 5 is completed !")
        callback()
    },1000)
}



// Callback Hell
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log("All task completed !!!")
                })
            })
        })
    })
})


