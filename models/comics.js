const Comics = (sequelize, DataTypes) => {
  const Comic = sequelize.define(
    'comics',
    {
      title: DataTypes.STRING,
      idCom: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return Comic;
};

module.exports = Comics;
