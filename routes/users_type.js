const User_type = require('../models/user_type');
const db = require('../config/database');

exports.list = function (req, res) {
    User_type.findAll()
    .then((result)=>{res.render('user_type/list', { title: "users", data: result })})
    .catch(err=> console.log(err))
};

exports.add = function (req, res) {
    res.render('user_type/add', { title: "Add user_type"  });
};

exports.edit = function (req, res) {

    var id = req.params.id;
    User_type.findByPk(req.params.id).then(result=>{
      res.render('users_type/edit', { title: "Edit user_type", data: result });
    }).catch(err=> console.log(err));

};


exports.save= function(req, res){

  User_type.create({
    name:req.body.name
  }).then(()=> res.redirect('/users_type'))
  .catch((error) => console.log(error));
}



exports.update = function (req, res) {

  var id = req.params.id;
    User_type
    .update({
      name:req.body.name
    },{where:{id:id}})
    .then(()=>{res.redirect('/users_type')})
    .catch(err=> console.log(err))
};
