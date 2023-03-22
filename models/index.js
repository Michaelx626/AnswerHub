const User = require('./User');
const Question = require('./Question');
// const Comment = require('./Comment');
// const Like = require('./Like');
// const Tag = require('./Tag');

User.hasMany(Question, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Question.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Question };
