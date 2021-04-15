const Users = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return User;
};

module.exports = Users;
