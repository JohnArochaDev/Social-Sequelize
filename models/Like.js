const { db } = require('../db/connection.js')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Like extends Sequelize.Model{}

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'Like'
})


module.exports = Like;