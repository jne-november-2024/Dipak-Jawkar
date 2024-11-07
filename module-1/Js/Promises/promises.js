let marks = 20;

const myPromise = new Promise((resolve, reject) => {
    if (marks >= 50) {
        resolve("PASS")
    } else {
        reject("FAIL")
    }
})

console.log("RESULT !!!")

myPromise.then((value) => {
    console.log(value)
}).catch((e) => {
    console.log(e)
})



console.log("------------------------")


const testCase1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PASS TEST CASE 1")
        }, 1500)
    })
}

const testCase2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PASS TEST CASE 2")
        }, 1500)
    })
}

const testCase3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PASS TEST CASE 3")
        }, 1500)
    })
}

const testCase4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PASS TEST CASE 4")
        }, 1500)
    })
}

const testCase5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PASS TEST CASE 5")
        }, 1500)
    })
}


testCase1().then((value) => {
    console.log(value)
    testCase2().then((value) => {
        console.log(value)
        testCase3().then((value) => {
            console.log(value)
            testCase4().then((value) => {
                console.log(value)
                testCase5().then((value) => {
                    console.log(value)
                    console.log("All test case pass !!!")
                })
            })
        })
    })
})


