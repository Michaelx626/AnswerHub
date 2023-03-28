const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostTag extends Model {}

PostTag.init(
  {
    post_id: {
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_tag',
  }
);

module.exports = PostTag;
