module.exports = (Sequelize, DataTypes) => {
  const Medication = Sequelize.define('Medication', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      required: true
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    dose: {
      type: DataTypes.FLOAT,
      required: true,
    },
    timesDaily: {
      type: DataTypes.INTEGER,
      required: true,
    },
    hoursInterval: {
      type: DataTypes.INTEGER,
      required: true,
    },
    start: {
      type: DataTypes.DATE,
      required: true,
    },
    finish: {
      type: DataTypes.DATE,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    createdAt: {
      type: DataTypes.DATE,
      required: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      required: true,
    }
  }, {});
  Medication.associate = models => {
    Medication.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Medication;
}