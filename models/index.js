const Comment = require('./Comment');
const Like = require('./Like');
const Post = require('./Post');
const PostTag = require('./PostTag');
const Tag = require('./Tag');
const User = require('./User');
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
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

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
