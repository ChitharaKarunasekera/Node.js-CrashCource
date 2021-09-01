const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine');

//listen for requests
app.listen(3000);//returns an instance of the server

//respond to requests
app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    //res.send('<p>About page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/about-us', (req, res) => {
    //res.send('<p>About page</p>');
    res.redirect('/about');
});

//4040 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});