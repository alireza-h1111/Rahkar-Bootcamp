const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/dataBaseConnection") ;

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
}, {
  timestamps:true
});



// `sequelize.define` also returns the model
console.log(Users === sequelize.models.Users); // true
module.exports = Users;
