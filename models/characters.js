const Characters = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    'characters',
    {
      name: DataTypes.STRING,
      idChar: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return Character;
};

module.exports = Characters;
