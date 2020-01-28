'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        unique: true
      },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      photo: { type: Sequelize.STRING },
      bio: { type: Sequelize.STRING },
      verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      email: { type: Sequelize.STRING, unique: true },
      password: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
