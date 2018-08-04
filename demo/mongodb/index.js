const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

//! define schema
let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//! turn schema into a variable
let Cat = mongoose.model("Cat", catSchema);

// let george = new Cat({
//     name: 'Ms.Norris',
//     age: 12,
//     temperament: 'Evil'
// });

// george.save((err, cat)=>{
//     if(err) {
//         console.log('Something went wrong');
//     }else {
//         console.log('Data saved');
//         console.log(cat);
//     }
// });

Cat.create({
    name: 'Snow',
    age: 11,
    temperament: 'Bland'
}, (err, cat)=>{
    if(err) {
        console.log(err);
    }else {
        console.log(cat);
    }
});

//! retrieve cat from database
Cat.find({}, (err, cats)=>{
    if(err) {
        console.log('Error');
        console.log(err);
    } else {
        console.log('All the cats....')
        console.log(cats);
    }
})