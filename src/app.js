const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const app = express();


// Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

const port = 3001
app.listen(port, () => console.log('Servidor corriendo en http://localhost:' + port));

// usar npm start