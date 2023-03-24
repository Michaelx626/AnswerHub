const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    try {
        res.render('bot');
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
