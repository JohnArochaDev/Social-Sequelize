import { db } from '../db/connection.js'
import { Sequelize, DataTypes, Model } from 'sequelize'

class Profile extends Sequelize.Model{}

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthdat: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Profile'
})

module.exports = Profile;