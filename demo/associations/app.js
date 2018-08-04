const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true });

//! define schema

let Post = require('./models/post');

let User = require('./models/user');




//? how to connect the post to the user

//! create a post
Post.create({
    title: 'luis post PART 4',
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

//! find user & find all posts for that user

// User.findOne({name: 'Luis yChun'}).populate('posts').exec((err, user)=>{
//     if(err){console.log(err)}else{
//         console.log(user);
//     }
// });


