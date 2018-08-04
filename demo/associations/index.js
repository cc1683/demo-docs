const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true });

//! define schema

//* POST - title, content

let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//* create post model

let Post = mongoose.model('Post', postSchema);

//* USER - email, name

let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

//* create user model

let User = mongoose.model('User', userSchema);

//! two different ways to create data and store it into mongodb
let newUser = new User({
    email: 'testing123456@gmail.com',
    name: 'testuser2'
});

newUser.posts.push({
    title: 'testuser2 post',
    content: 'testuser2 post content',
});

newUser.save((err, user)=>{
    if(err){
        console.log(err);
    }else {
        console.log(user); 
    }
});

// Post.create({
//     title: 'testusers post',
//     content: 'this is the testuser post, test associations'
// }, (err, post)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

