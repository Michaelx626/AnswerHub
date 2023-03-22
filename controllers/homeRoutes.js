const router = require('express').Router();
const { User, Question } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const questionData = await Question.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const questions = questionData.map((question) => question.get({ plain: true }));
    console.log(questions);
    res.render('homepage', { 
      questions, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/question/:id', async (req, res) => {
  try {
    const questionData = await Question.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const question = questionData.get({ plain: true });

    res.render('question', {
      ...question,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  // try {
  //   // Find the logged in user based on the session ID
  //   const userData = await User.findByPk(req.session.user_id, {
  //     attributes: { exclude: ['password'] },
  //     include: [{ model: Project }],
  //   });

  //   const user = userData.get({ plain: true });

  //   res.render('profile', {
  //     ...user,
  //     logged_in: true
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  res.render('profile');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;
