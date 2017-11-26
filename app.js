const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser')
const logger = require('morgan');



// Set pug as the view engine
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use logger to log all incoming request
app.use(logger('dev'));

// share all files in the `public` directory
app.use(express.static(path.join(__dirname, 'public')));

// import routes
const index = require('./routes/index')
const recipes = require('./routes/recipes')

// Use Routes
app.use('/', index);
app.use('/recipes', recipes);

// Catch all other requests
app.get('*', function(req, res, next){
  res.send('404')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

