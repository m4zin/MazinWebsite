const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session');

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use('/', require('./routes/index'))
app.use('/contact', require('./routes/contact'))

app.listen(port, () => {
  console.log(`Mazin's Website listening on port ${port}`)
})