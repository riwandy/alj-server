const db = {}

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname,file))
        db[model.name] = model
    })  

// db.Employee.hasMany(db.Timesheet)
// db.Timesheet.belongsTo(db.Employee, {foreignKey : 'employeeID', targetKey : 'employeeID'})
// db.Timesheet.belongsTo(db.Project, {foreignKey : 'projectID', targetKey : 'projectID'})
// db.User.belongsTo(db.Employee, {foreignKey : 'employeeID', targetKey : 'employeeID'})
// db.Project.belongsTo(db.Employee, {foreignKey : 'supervisor', targetKey : 'employeeID'})
// db.Project.belongsTo(db.Client, {foreignKey : 'clientID', targetKey : 'clientID'})
// db.Employee.hasMany(db.Timesheet, {foreignKey : 'employeeID', targetKey : 'employeeID'})


db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db