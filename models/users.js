const sequelize = require('sequelize');
const db=require('../config/database');

const User = db.define("user", {
  id: {
    type: sequelize.INTEGER,
    defaultValue: sequelize.UUIDV1,
    primaryKey: true
  },
  full_name: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING,
    unique:true
  },
  gender: {
    type: sequelize.STRING
  },
  created_at:{
    type: sequelize.DATE
  }
});

User.associate = models => {
  User.belongsTo(models.user_type);
};

module.exports=User;
