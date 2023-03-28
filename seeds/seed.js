const sequelize = require('../config/connection');
const { User, Post, Comment, Tag } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
// const commentData = require('./commentData.json');
const tagData = require('./tagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const tags = await Tag.bulkCreate(tagData);

  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //     // post_id: post[Math.floor(Math.random() * post.length)].id,
  //   })
  // }

  process.exit(0);
};

seedDatabase();
