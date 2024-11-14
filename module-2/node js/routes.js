
const fs = require("fs")


const server = (req, res) => {
    // console.log(req.url, req.method, req.headers)

    // process.exit()   // hard exit from event loop (terminate the program - server)

    const url = req.url
    const method = req.method
    if (url === "/") {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<h1> this is a home </h1>")
        res.write("<form action='/message' method='POST'><input type='text' value='hello' name='name'></input><button type='submit'>submit</button></form>")
        res.write("</html>")
        return res.end() // end response 
    }

    if (url === "/message" && method === "POST") {
        const data = []
        req.on("data", (chunk) => {
            data.push(chunk)
        })
        req.on("end", () => {
            let newData = Buffer.concat(data).toString()
            const parseBody = newData.split("=")
            // fs.writeFileSync("ex.txt", parseBody[0] + " -- " + parseBody[1]) 
            let newText = parseBody[0] + " -- " + parseBody[0]
            fs.writeFile("ex.txt", newText, (err) => {
                console.log(err)
            })

            console.log(parseBody)
        })
        fs.writeFileSync("message.txt", "DUMMMY")
        res.statusCode = 302 // redirect status code 302
        res.setHeader("Location", "/")
        return res.end()
    }

    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<h1> This is a Title of Page </h1>")
    res.write("<p>this is a content of page !!</p>")
    res.write("</html>")
    res.end() // end response 


}

module.exports = server

// module.exports = { 
//     hadleFun : server
// }

// module.exports.handleFun = server

// exports.handleFun = server