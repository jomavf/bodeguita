
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      code: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      timestamps:false,
      tableName: 'bsb_user',
      schema: 'public'
    }
  );
};
