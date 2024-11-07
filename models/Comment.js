const { db } = require('../db/connection.js')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Comment extends Sequelize.Model{}

Comment.init({
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'Comment'
})


module.exports = Comment;