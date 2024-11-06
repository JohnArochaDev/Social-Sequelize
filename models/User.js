import { db } from '../db/connection.js'
import { Sequelize, DataTypes, Model } from 'sequelize'

class User extends Sequelize.Model{}

User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User'
})


module.exports = User;