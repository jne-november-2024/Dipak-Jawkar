const sequelize = require("../utils/database");
const Sequelize = require("sequelize");

const userModel = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,      
        allowNull: false,
        primaryKey: true          
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true          
    },
    email: {
        type: Sequelize.STRING,
        unique: true,            
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = userModel;
