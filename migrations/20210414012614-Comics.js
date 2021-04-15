module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('comics',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idCom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('comics'),
};
