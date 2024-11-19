const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const productModel = sequelize.define("Product", {  
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    price: {
        type: Sequelize.FLOAT,  
        allowNull: false 
    }
});

module.exports = productModel;
