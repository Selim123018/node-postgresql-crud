const user_type = (sequelize, DataTypes) => {
  const User_type = sequelize.define('user_type', {
    id: {
        type: Seq.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.VARCHAR
    },
    created_at:{
      type: DataTypes.DATE
    }
  });

  User_type.associate = models => {
    User_type.hasMany(models.user);
  };


  return User_type;
};

export default user_type;
