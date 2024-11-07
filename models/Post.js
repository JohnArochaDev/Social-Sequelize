const { db } = require('../db/connection.js')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Post extends Sequelize.Model{}

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'Post'
})

module.exports = Post;