const User = require('./User');
const Post = require('./Post');
// const Comment = require('./Comment');
// const Like = require('./Like');
// const Tag = require('./Tag');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
