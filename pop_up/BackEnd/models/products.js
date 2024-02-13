const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/dataBaseConnection") ;

const Products = sequelize.define('Products', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  pName: {
    type: Sequelize.STRING,
    unique: true
  },
  pPrice: {
    type: Sequelize.STRING
  }
}, {
  timestamps:true
});


// `sequelize.define` also returns the model
console.log(Products === sequelize.models.Products); // true
module.exports = Products;
