const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogsRoutes=require('./routes/blogRoutes')
// express app
const app = express();




//connect to mongoDb
const dbURI = 'mongodb+srv://blog:Abcd@blog.e4zz1p1.mongodb.net/blog-project'
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to mongo Db')
    //listen for requests
    app.listen(5000);
  })
  .catch((err) => console.error('could not connect', err))


// register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))



/************************************************ROUTES********************************************/
app.get('/', (req, res) => {

  res.redirect('/blogs')
});




app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.get('/blogs/create', (req, res) => {
  res.render('blogs/create', { title: 'Create a new blog' });
});

app.use('/blogs',blogsRoutes)

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});