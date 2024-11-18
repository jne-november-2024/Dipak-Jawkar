const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const path = require("path")
const todoRoutes = require("./routes/todoRoutes")

const PORT = 8080;
const app = express();  
const server = http.createServer(app);  

app.set("view engine", "ejs");  

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, ".", "public")))


app.use("/", todoRoutes)

// app.get("/", (req, res) => {
//     return res.render("../views/pages/home.ejs",{
//         id : 1
//     })
// });

app.use((req,res)=>{
    return res.render("./views/pages/error.js")
})


server.listen(PORT, () => {
  console.log(`SERVER IS STARTED ON PORT ${PORT}`);
});
