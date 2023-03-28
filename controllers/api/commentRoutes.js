const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      body: req.body.body,
      user_id: req.session.user_id,
      post_id: +req.body.post_id,
    });

    res.status(200).json(commentData);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
