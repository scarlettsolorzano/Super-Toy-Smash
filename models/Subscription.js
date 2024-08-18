const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql2');

const Subscription = sequelize.define(
  'Subscription',
  {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
console.log(Subscription === sequelize.models.Subscription); // true