const express = require("express")
const path = require("path")
const rootDir = require("../utils/path")

const route = express.Router()

route.get("/add-product", (req,res)=>{
    return res.sendFile(path.join(rootDir, 'view', 'add-products.html'))
})

route.post("/add-product", (req,res)=>{
    console.log(req.body)
    return res.sendFile(path.join(rootDir, 'view', 'shop.html'))
})


module.exports = route