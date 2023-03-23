// const router = require('express').Router();
// const { Tag, Post, PostTag } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/:name', withAuth, async (req, res) => {
//     try {
//         const tagData = await Tag.findAll({where: {name: req.params.name}, 
//             include: [{ model: Post, through: PostTag }],
//         });

//         res.status(200).json(tagData);
//     } catch (error) {
//         console.error(error);
//     }
// });