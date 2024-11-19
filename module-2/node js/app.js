const http = require("http");
// const routes = require("./routes")
const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended : false}))

// app.use((req,res)=>{
//     res.setHeader("ContentType","text/html")
//     res.write("<h1>hiii</h1>")
//     res.end()
//     // next()
// })

// app.use(express.json())

// app.use("/",(req,res, next)=>{
//     next()
// }, (req,res, next)=>{
//     req.user = "dipak1234"
//     next()
// }, (req,res, next)=>{
//     return res.send({
//         message:"middleware working !!",
//         user: req.user
//     })
// })

app.use("/add-product", (req, res, next) => {
    res.send(
      '<form action="/products" method="POST"> <input name="title"/> <input type="submit" value="add"></form>'
    );
  });
  

app.use("/products",(req, res, next)=>{
    console.log(req.body)
    res.redirect("/")
})

app.use("/",(req,res,next)=>{
    res.send("this is express")
})

// app.use("/middle",(req, res, next)=>{
//     console.log("nooo")
//     res.send("hell0000o")
// }) 

app.use((req, res, next) => {
    console.log("1st Middleware !")
    next() // Allows the request continue to next middleware
})

app.use((req, res, next) => {
    console.log("2st Middleware !")
    res.send({
        message: "hello from express"
    })
})

// const server = http.createServer(app)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`SERVER IS STARTED ON PORT ${PORT}`)
})