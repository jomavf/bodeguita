import Sequelize from 'sequelize';
import UserModel from './models/bsb_user';
import ProductModel from './models/bsb_product';



let sequelize = new Sequelize(process.env.DB_POSTGRES, process.env.USERNAME_POSTGRES, process.env.PASSWORD_POSTGRES, {
  host: process.env.HOST_POSTGRES,
  port: process.env.PORT_POSTGRES,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const closeSequelize = async () => {
  await sequelize.close()
}

let User = UserModel(sequelize, Sequelize);
let Product = ProductModel(sequelize, Sequelize);

module.exports = {
  User,
  Product
}