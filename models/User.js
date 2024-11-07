const { db } = require('../db/connection.js')
const { Sequelize, DataTypes, Model } = require('sequelize')

class User extends Sequelize.Model{}

User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'User'
})


module.exports = User;