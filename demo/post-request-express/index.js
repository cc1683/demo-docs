const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');


var users = [
    {
        username: 'John',
        userid: '00001'
    },
    {
        username: 'Bob',
        userid: '00002'
    },
    {
        username: 'Steven',
        userid: '00003'
    },
];

app.get('/', (req, res)=>{
    res.render('home');
})
app.get('/users', (req, res)=>{
    res.render('users', {
        users: users
    });
});

app.post('/adduser', (req, res)=>{
    let name = req.body.username;
    let id = req.body.userid;
    let user = {
        username: name,
        userid: id
    };
    users.push(user);
    res.redirect('users')
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000....');
})