const Sequelize = require("sequelize")

const sequelize = new Sequelize('todo', 'root', 'Thinkitive@123',{
    host :'localhost',
    dialect : 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log("DB IS CONNECTED !!")
}).catch(()=>{
    console.log("error")
})

module.exports = sequelize