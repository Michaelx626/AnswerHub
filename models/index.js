const Comment = require('./Comment');
const Like = require('./Like');
const Post = require('./Post');
const PostTag = require('./PostTag');
const Tag = require('./Tag');
const User = require('./User');
<<<<<<< HEAD
const UserTag = require('./UserTag');

//User has man followers
User.hasMany (User, {
  foreignKey: 'follower_id',
  onDelete: 'CASCADE',
  as: 'follower'
});
//Follwer belongs to user
User.belongsTo(User, {
  foreignKey: 'follower_id',
  as: 'followedUser'
});

User.hasMany(Tag, {
  through: {
    model: UserTag,
    unique: false
  }
});
Tag.hasMany(User, {
  through: {
    model: UserTag,
    unique: false
  }
});

Post.hasMany(Tag, {
  through: {
    model: PostTag,
    unique: false
  }
});
Tag.hasMany(Post, {
  through: {
    model: PostTag,
    unique: false,
  }
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
=======
const Post = require('./Post');
const Comment = require('./Comment');
// const Like = require('./Like');
const Tag = require('./Tag');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

>>>>>>> f2fafba (worked on some api routes)
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

<<<<<<< HEAD
<<<<<<< HEAD
User.hasMany(Like, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Like.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Like, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Like.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Comment, Like, Post, Tag, User };
=======
module.exports = { User, Post };
>>>>>>> f2fafba (worked on some api routes)
=======
module.exports = { User, Post, PostTag, User, UserTag, Tag, Like, Comment };
>>>>>>> ed62e42 (made changes to the post and tag routes)
