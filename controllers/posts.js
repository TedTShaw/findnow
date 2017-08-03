const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
  getAllPosts,
  getPost,
  createPost
}

function getAllPosts(req, res, next) {
  Post.find({})
  .then(posts => res.json(posts))
  .catch(err => res.status(500).json(err));
}

function getPost(req, res, next) {
  Post.findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => res.status(500).json(err));
}

function createPost(req, res, next) {
  let user = User.findById(req.user._id, (err, user) => {
    Post.create(req.body)
    .then(post => {
      user.posts.push(post._id);
      post.user = user._id;
      post.save();
      user.save();
      res.status(201).json(post);
    }).catch(err => res.status(400).json(err));
  })
}
