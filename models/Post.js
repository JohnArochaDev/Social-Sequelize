import { db } from '../db/connection.js'
import { Sequelize, DataTypes, Model } from 'sequelize'

class Post extends Sequelize.Model{}

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Post'
})

module.exports = Post;