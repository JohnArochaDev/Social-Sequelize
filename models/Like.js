import { db } from '../db/connection.js'
import { Sequelize, DataTypes, Model } from 'sequelize'

class Like extends Sequelize.Model{}

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Like'
})


module.exports = Like;