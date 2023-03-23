// const router = require('express').Router();
// const { Comment, User, UserTag } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.create(req.body, {
//             include: [{ model: User, through: UserTag }]
//         })
//         res.status(200).json(commentData);
//     } catch (error) {
//         console.error(error);
//     }
// });

// module.exports = router;