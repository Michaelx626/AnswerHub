const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/posts/:id/likes', withAuth, async (req, res) => {
    try {
        const updatePost = await Post.findByPk(req.params.id);
        updatePost.number_likes = req.body.number_likes;
        await updatePost.save();
    } catch (error) {
         console.error(error);
    }
 });
 

module.exports = router;