const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true });

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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

//* create user model

let User = mongoose.model('User', userSchema);

//! create a post
Post.create({
    title: 'luis post PART 2',
    content: 'blah blah blah'
},(err, post)=>{
    User.findOne({
        name: 'Luis yChun'
    }, (err, foundUser)=>{
        foundUser.posts.push(post);
        foundUser.save((err, data)=>{
            console.log(data);
        });
    });
});

//! create a user
// User.create({
//     name: 'Luis yChun',
//     email: 'test@yahoo.io'
// },(err, user)=>{
//     if(err){console.log(err)}
//     else{
//         console.log(user)
//     }
// });

//? how to connect the post to the user


