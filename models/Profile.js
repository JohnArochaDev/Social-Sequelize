const { db } = require('../db/connection.js')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Profile extends Sequelize.Model{}

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthdat: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'Profile'
})

module.exports = Profile;