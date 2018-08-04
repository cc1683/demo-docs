const express = require('express');
const app = express();

//! to include assets, tell express which file should include

app.use(express.static("assets"));

//! tell express the file extension
app.set('view engine', 'ejs');

// define the first route
// app.get('/', (req, res) => {
//     res.send("Home Page");
// });
// app.get('/about', (req, res) => {
//     res.send("About Page");
// });

// app.get('*', (req, res) => {
//     res.send('page not exist');
// });

//* ejs template demo
//! define a user route
app.get('/member/:users', (req, res)=>{
    let username = req.params.users
    let usertable = {
        albert: {
            username: 'Albert',
            userid: 'A0001',
            memberType: 'Gold'
        },
        bob: {
            username: 'Bob',
            userid: 'A0002',
            memberType: 'Gold'
        },
        john: {
            username: 'John Doe',
            userid: 'A0003',
            memberType: 'Silver'
        },
    }
    let userid = usertable[username].userid;
    //! render the ejs file, create a directory call views, and store the ejs file inside
    //! pass an object to the ejs file
    res.render('members', {
        username: username,
        userid: userid,
        memberType: usertable[username].memberType
    });
})

//! define a posts route
app.get('/posts', (req, res)=>{
    //! create an array to store posts, and use looping to loop each of the post and render in posts.ejs
    let posts=[
        {
            title: 'Post 1',
            author: 'John'
        },
        {
            title: 'Post 2',
            author: 'Doe'
        },
        {
            title: 'Post 3',
            author: 'Bob'
        },
        {
            title: 'Post 4',
            author: 'Jack'
        },
    ]
    res.render('posts', {posts: posts});
})

// listen on port 3000
app.listen(3000, ()=>{
    console.log('Server started....');
});

