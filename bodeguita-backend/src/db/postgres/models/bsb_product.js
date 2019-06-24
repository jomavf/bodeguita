module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
      'Product',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
        },
        type:DataTypes.STRING,
        nationality:DataTypes.STRING,
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        discount: DataTypes.BOOLEAN
      },
      {
        timestamps:false,
        tableName: 'bsb_product',
        schema: 'public'
      }
    );
  };
  