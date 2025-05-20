const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('motor', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('../models/Products')(sequelize, DataTypes);


//  sequelize.sync({ alter: true });
// console.log('All models were synchronized successfully.');

module.exports = db