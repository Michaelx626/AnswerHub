const router = require('express').Router();

const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
// const botRoutes = require('./botRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/bot', botRoutes);

module.exports = router;
