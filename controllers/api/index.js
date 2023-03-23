const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// const likeRoutes = require('./likeRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// router.use('/likes', likeRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
