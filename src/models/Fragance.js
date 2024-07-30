const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// En Mayúsculas y singular      // en minúsculas y singular
const Fragance = sequelize.define("user", {
  // Definimos las columnas aquí
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  volume: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Fragance;
