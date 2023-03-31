const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const { User } = require('../../models');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'jpg', // set the file format to jpg
    public_id: (req, file) => 'profile-pic-' + Date.now(), // set a custom public_id
  },
});

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

const upload = multer({ storage: storage });
router.post('/update-profile-pic', upload.fields([{ name: 'profilePic' }, { name: 'bio' }]), async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);

    // check if at least one field is present
    if (!req.files.profilePic && !req.body.bio) {
      return res.status(400).json({ message: 'At least one field is required.' });
    }

    // process profilePic if present
    if (req.files.profilePic) {
      user.profilePic = req.files.profilePic[0].path;
    }

    // process bio if present
    if (req.body.bio) {
      user.userBio = req.body.bio;
    }

    // save user data
    await user.save();

    // send updated profile data in response
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
