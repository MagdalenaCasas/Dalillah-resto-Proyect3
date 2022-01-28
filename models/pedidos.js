const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Pedidos = sequelize.define(
  'pedidos',
  {
    precio_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM(
        'NUEVO',
        'CONFIRMADO',
        'PREPARANDO',
        'ENVIANDO',
        'CANCELADO',
        'ENTREGANDO'
      ),
      defaultValue: 'NUEVO',
      allowNull: false,
    },
    forma_pago: {
      type: DataTypes.ENUM('EFT', 'TC', 'MP'),
      allowNull: false,
    },
  },
  {
    tableName: 'pedidos',
    underscored: true,
  }
);

module.exports = Pedidos;
