const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    
    test("replace with your test", function() {
        expect(true).toBe(true);
    })

    
    describe('Social Sequelize Test', () => {

        test('User has one Profile', async () => {
            expect(User.associations.Profile).toBeDefined();
            expect(User.associations.Profile.associationType).toBe('HasOne');
        });

        test('Profile belongs to User', async () => {
            expect(Profile.associations.User).toBeDefined();
            expect(Profile.associations.User.associationType).toBe('BelongsTo');
        });

        test('User has many Posts', async () => {
            expect(User.associations.Posts).toBeDefined();
            expect(User.associations.Posts.associationType).toBe('HasMany');
        });

        test('Post has one User', async () => {
            expect(Post.associations.User).toBeDefined();
            expect(Post.associations.User.associationType).toBe('HasOne');
        });

        test('Post has many Comments', async () => {
            expect(Post.associations.Comments).toBeDefined();
            expect(Post.associations.Comments.associationType).toBe('HasMany');
        });

        test('Comment belongs to Post', async () => {
            expect(Comment.associations.Post).toBeDefined();
            expect(Comment.associations.Post.associationType).toBe('BelongsTo');
        });

        test('User has many Likes', async () => {
            expect(User.associations.Likes).toBeDefined();
            expect(User.associations.Likes.associationType).toBe('HasMany');
        });

        test('Like has many Users', async () => {
            expect(Like.associations.Users).toBeDefined();
            expect(Like.associations.Users.associationType).toBe('HasMany');
        });
    });



})