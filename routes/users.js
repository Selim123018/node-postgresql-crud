const { Client } = require('pg');
var connectionString = "postgres://postgres:root@localhost:5432/database";

const client = new Client({
    connectionString: connectionString
});

client.connect();

exports.list = function (req, res) {

    client.query('SELECT * FROM user', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('user/list', { title: "users", data: result.rows });
    });

};

exports.add = function (req, res) {
    res.render('user/add', { title: "Add user"  });
};

exports.edit = function (req, res) {

    var id = req.params.id;

    client.query('SELECT * FROM user WHERE id=$1', [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('user/edit', { title: "Edit user", data: result.rows });
    });

};

exports.save = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone];

    client.query('INSERT INTO user(name, address, email, phone) VALUES($1, $2, $3, $4) RETURNING *', cols, function (err, result) {
        if (err) {
            console.log("Error Saving : %s ", err);
        }
        res.redirect('/users');
    });

};

exports.update = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone, req.params.id];

    client.query('UPDATE user SET name=$1, address=$2,email=$3, phone=$4 WHERE id=$5', cols, function (err, result) {
        if (err) {
            console.log("Error Updating : %s ", err);
        }
        res.redirect('/users');
    });

};

exports.delete = function (req, res) {

    var id = req.params.id;

    client.query("DELETE FROM user WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error deleting : %s ", err);
        }
        res.redirect('/users');
    });

};


