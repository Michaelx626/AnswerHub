const router = require('express').Router();
const userRoutes = require('./userRoutes');
const questionRoutes = require('./questionRoutes');
const commentRoutes = require('./commentRoutes');
const likeRoutes = require('./likeRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
router.use('/questions', questionRoutes);
router.use('/comments', commentRoutes);
router.use('/likes', likeRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
