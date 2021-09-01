const express = require('express');
const morgan = require('morgan');// an http request longer middleware for Node.js

// express app
const app = express();

// listen for requests
app.listen(3000);

app.use(morgan('dev'));//How its going to be loaded

//fires for every request
app.use((req, res, next) => {
  console.log('new request made: ');
  console.log('host: ', req.hostname);//localhost
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();//to avoid page hanging
});

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
//Must be at the end!!!
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
