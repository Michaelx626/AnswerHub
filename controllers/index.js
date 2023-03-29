const router = require('express').Router();

const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const aiRoutes = require('./AIroute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/airesponse', aiRoutes);

module.exports = router;
