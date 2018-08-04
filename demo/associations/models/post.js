const mongoose = require('mongoose');

//* POST - title, content

let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//* create post model

let Post = mongoose.model('Post', postSchema);

//! module.exports act like return, we include something in the main js file and we have to return something back to it
module.exports = Post;