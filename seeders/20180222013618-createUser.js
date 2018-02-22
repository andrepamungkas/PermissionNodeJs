'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Users', [{
          username: 'admin',
          password: 'admin',
          role: 'admin'
      }, {
          username: 'contributor',
          password: 'contributor',
          role: 'contributor'
      }, {
          username: 'reader',
          password: 'reader',
          role: 'reader'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
