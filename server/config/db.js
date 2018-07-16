const Sequelize = require('sequelize')
const path = require('path')
require ('dotenv').load();
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  port: process.env.DB_PORT,
  define: {
    underscored: true // table column names are snake_case not camelCase !!
  }
})

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
debugger
db.users = require('../models/users.js')(sequelize, Sequelize)

// //Relations
// db.clothes.belongsTo(db.users)
// db.users.hasMany(db.clothes)

module.exports = db