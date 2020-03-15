module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      name: {
        type: Sequelize.STRING,
        required: true,
      },
      dose: {
        type: Sequelize.FLOAT,
        required: true,
      },
      timesDaily: {
        type: Sequelize.INTEGER,
        required: true,
      },
      hoursInterval: {
        required: true,
        type: Sequelize.INTEGER,
      },
      start: {
        required: true,
        type: Sequelize.DATE
      },
      finish: {
        required: true,
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
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
    return queryInterface.dropTable('Medications');
  }
};