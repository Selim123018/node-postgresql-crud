const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

var users = require('./routes/users');
var users_type = require('./routes/users_type');
var routes = require('./routes');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/users', users.list);
app.get('/users/add', users.add);
app.post('/users/add', users.save);
app.get('/users/delete/:id', users.delete);
app.get('/users/edit/:id', users.edit);
app.post('/users/edit/:id', users.update);

// For user_type
app.get('/users_type', users_type.list);
app.get('/users_type/add', users_type.add);
app.post('/users_type/add', users_type.save);
app.get('/users_type/edit/:id', users_type.edit);
app.post('/users_type/edit/:id', users_type.update);


app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
