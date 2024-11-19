const express = require("express")
const fs = require("fs")
const User = require("./model/userModel")
const Products = require("./model/productModel")

require("dotenv").config()

const sequelize = require("./utils/database")
const path = require("path")

const port = process.env.PORT || 8080

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    User.findAll().then((value) => {
        return res.render("home", {
            data: value
        })
    }).catch((e) => {
        console.log(e)
        return res.render("home", {
            data: [],
            edit : false
        })
    })

})

app.post("/delete/user", (req, res) => {
    console.log(req.body.id)
    const id = req.body.id
    User.findByPk(id).then((val)=>{
        return val.destroy()
    })
    .then(()=>{
       return res.redirect("/")
    })
    .catch((e)=>{
        console.log(e)
        return res.redirect("/")
    })
     
})

app.post("/add/user", (req, res) => {
    const { name, email, password } = req.body
    User.create({
        name, email, password
    }).then((val) => {
        console.log(val)
        console.log("Added Successfuly !!")
        return res.redirect("/")
    }).catch((e) => {
        console.log(e)
        return res.redirect("/")
    })

})


sequelize.sync({}).then((value) => {
    console.log(value)


    app.listen(port, () => {
        console.log("SERVER IS STATED ON PORT", port)
    })

}).catch((e) => {
    console.log(e)
})

