const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const postCtrl = require('../controllers/posts');

// Public routes (no auth required)
router.post('/users/login', userCtrl.login);
router.get('/users/logout', userCtrl.logout);
router.post('/users', userCtrl.create);
router.get('/users/me', userCtrl.me);

router.get('/posts', postCtrl.getAllPosts);
router.get('/posts/:id', postCtrl.getPost);
// This one needs to be logged in but must set it up so when
// click the report button, goes to signup page
router.post('/posts', postCtrl.createPost);
// Auth middleware (routes below need authentication)
router.use(function(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
});



module.exports = router;
