const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { User } = require('../../models');



router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../../public/uploads/');
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});
const upload = multer({ storage: storage })

router.post('/update-profile-pic', upload.fields([{ name: 'profilePic' }, { name: 'bio' }]), async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);

    // check if at least one field is present
    if (!req.files.profilePic && !req.body.bio) {
      return res.status(400).json({ message: 'At least one field is required.' });
    }

    // process profilePic if present
    if (req.files.profilePic) {
      user.profilePic = req.files.profilePic[0].filename;
    }

    // process bio if present
    if (req.body.bio) {
      user.userBio = req.body.bio;
    }
   
    await user.save();
    res.status(200).json({
      profilePic: user.profilePic,
      userBio: user.userBio
    });
    
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
});

module.exports = router;
