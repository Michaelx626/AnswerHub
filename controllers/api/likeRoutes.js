const router = require('express').Router();
const { Post, Like, User } = require('../../models');
// const withAuth = require('../../utils/auth');

router.put('/posts/:id/likes', async (req, res) => {
  try {
    // await Like.create({
    //   user_id: req.session.user_id,
    // //   post_id: req.params.id
    // // });
    // console.log(req.body);

    // const updatePost = await Post.findByPk(req.params.id);

    // // const updatePost = await Post.findByPk(req.params.id, {
    // //   include: [
    // //     { 
    // //       model: User,
    // //       attributes: { exclude: ['password'] },
    // //     },
    // //     {
    // //       model: Like,
    // //     },
    // //   ],
    // // });
    // updatePost.number_likes = req.body.number_likes;
    // // updatePost.isLiked = req.body.isLiked;
    // await updatePost.save();
    // res.status(200).json('Good to go!');
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
