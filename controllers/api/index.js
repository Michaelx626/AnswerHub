const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
const questionRoutes = require('./questionRoutes');

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
router.use('/questions', questionRoutes);

module.exports = router;
