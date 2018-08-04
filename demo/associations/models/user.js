const mongoose = require('mongoose');

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

module.exports = User;