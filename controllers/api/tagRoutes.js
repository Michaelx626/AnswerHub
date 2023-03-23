const router = require('express').Router();
const { Tag, Post, PostTag, User, UserTag } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/:name', async (req, res) => {
    try {
        const tagData = await Tag.findAll({where: {name: req.params.name}, 
            include: [{ model: Post, through: PostTag }, { model: User, through: UserTag }],
        });

        const tags = tagData.map((tag) => tag.get({ plain: true }));

        res.render('tag', { tags, logged_in: req.session.logged_in });
    } catch (error) {
        console.error(error);
    }
});