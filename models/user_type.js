const sequelize = require('sequelize');
const db=require('../config/database');

const User_type = db.define('user_type', {
  id: {
    type: sequelize.INTEGER,
    defaultValue: sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: sequelize.STRING
  },
  created_at:{
    type: sequelize.DATE
  }
});

User_type.associate = models => {
  User_type.hasMany(models.user, {
    foregnkey:'id'
  });
};

module.exports=User_type;
