const router = require('express').Router();
const { Post, Tag, PostTag } = require('../../models');
// const { Post, Tag, PostTag, User, UserTag } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    }, {
      include: [{ model: Tag, through: PostTag }]
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPost = await Post.create(req.body, {
//       include: [{ model: Tag, through: PostTag }, { model: User, through: UserTag}]
//     });

//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const questionData = await Question.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!questionData) {
//       res.status(404).json({ message: 'No question found with this id!' });
//       return;
//     }

//     res.status(200).json(questionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;