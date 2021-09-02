const express = require('express');
const morgan = require('morgan');// an http request longer middleware for Node.js
const mongoose = require('mongoose');
const Blog = require('./models/blog');//import blog file

// express app
const app = express();

//Connect to Mongo DB
const dbURI = 'mongodb+srv://chithzz01:chithzz01@nodetuts.sohmq.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));//How its going to be loaded

// //mongoose and mongo sandbox routs
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my blog'
//     });
//
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })
//
// app.get('/all-blogs', (req, res) => {
//     Blog.find()//Get all blogs in collection
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

//find individual blog
app.get('/single-blog', (req, res) => {
    //find the blog using its ID
    Blog.findById('613073271a96ce7d335ebbb9')//finds the blog that has this id
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

//fires for every request
app.use((req, res, next) => {
    console.log('new request made: ');
    console.log('host: ', req.hostname);//localhost
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();//to avoid page hanging
});

app.get('/', (req, res) => {
    response.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});


//Blog routes
//page where all blogs are displayed
app.get('/blogs', (req, res) =>{
  Blog.find()
      .then((result) => {
          res.render('index', {title: 'All Blogs', blogs: result})
      })
      .catch((err) => {
          console.log('err')
      })
})


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
});

// 404 page
//Must be at the end!!!
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});
