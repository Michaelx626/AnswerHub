const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const usersData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    posts.sort((a,b) => (new Date(b.date_created) - new Date(a.date_created)));

    const users = usersData.get({ plain: true });
    
    res.render('homepage', { posts, users });

  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           model: Post
//         },
//       ],
//     });

//     const comments = commentData.map((comment) => comment.get({ plain: true }));
//     console.log(comments);
//     res.render('post', { comments, logged_in: req.session.logged_in });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
    });

    const commentData = await Comment.findAll({ where: {post_id: req.params.id},
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    console.log(commentData);
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(comments);

    res.render('comment', {
      ...post, ...comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    user.posts.sort((a,b) => (new Date(b.date_created) - new Date(a.date_created)));

    res.render('profile', {
      user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

router.get('/search', (req, res) => {
  res.render('search');
})

module.exports = router;
