const { Comment, Like, Post, Profile, User } = require("./models/index");

User.hasOne(Profile);
Profile.belongsTo(User);
User.hasMany(Post);
Post.hasOne(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Like);
Like.hasMany(User);

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}