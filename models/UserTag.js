const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserTag extends Model {}

UserTag.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timeStamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_tag',
  }
);

module.exports = UserTag;
