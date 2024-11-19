const express = require("express")
const bodyParser = require("body-parser")
const adminRoute = require("./routes/adminRoutes")
const todoRoute = require("./routes/todo/todoRoutes")
const path = require("path")

const PORT = 8080;
const app = express()

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))


app.use("/todo",todoRoute )

// app.use("/admin", adminRoute)
// app.use("/",(req,res)=>{
//     return res.sendFile(path.join(__dirname, "view", "404.html"))
// })

app.listen(PORT,()=>{
    console.log(`SERVER IS STARTED ON ${PORT}`)
})

