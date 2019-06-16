const { Client } = require('pg');
const User = require('../models/users');
const User_type = require('../models/user_type');
const db = require('../config/database');



exports.list = function (req, res) {
    User.findAll()
    .then((result)=>{res.render('user/list', { title: "users", data: result })})
    .catch(err=> console.log(err))
};

exports.add = function (req, res) {
    User_type.findAll()
    .then((result)=>{res.render('user/add', { title: "Add user", data: result  })})
    .catch(err=> console.log(err));
};

exports.edit = function (req, res) {

    var id = req.params.id;
    User.findByPk(req.params.id).then(result=>{
      res.render('user/edit', { title: "Edit user", data: result });
    }).catch(err=> console.log(err));

};


exports.save= function(req, res){

  let {full_name, email, gender} = req.body;
  User.create({
    full_name,
    email,
    gender
  }).then(()=> res.redirect('/users'))
  .catch((error) => console.log(error));

}


exports.update = function (req, res) {

  let {full_name, email, gender} = req.body;
  var id = req.params.id;
    User
    .update({
      full_name,
      email,
      gender
    },{where:{id:id}})
    .then(()=>{res.redirect('/users')})
    .catch(err=> console.log(err))
};

exports.delete = function (req, res) {

    var id = req.params.id;

    User.destroy({
      where:{
        id:id
      }})
      .then(()=>res.redirect('/users'))
      .catch(err=> console.log(err))
};
