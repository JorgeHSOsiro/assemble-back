module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Vision',
        email: 'jarvis@gmail.com',
        password: '12345678',
      },
      {
        name: 'Wanda Maximoff',
        email: 'scarlet.witch@gmail.com',
        password: '12345678',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
