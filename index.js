const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./routes/routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

app.engine('hbs', exphbs({
    extname : '.hbs'
}));

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});