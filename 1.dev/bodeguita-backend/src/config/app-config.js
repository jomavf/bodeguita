// import bodyParser from 'body-parser';
// import cors from 'cors';
// import logger from 'morgan';
// import Sequelize from 'sequelize';
// import queryParams from 'express-query-params';
// import { handleError, jsonAsyncBody } from '../routes/middlewares/app-middleware';
// import mung from 'express-mung';
// import cookieParser from 'cookie-parser';
// import createLocaleMiddleware from 'express-locale';

const bodyParser = require( 'body-parser');
const cors = require( 'cors');
const logger = require( 'morgan');
const Sequelize = require( 'sequelize');
const queryParams = require( 'express-query-params');
const { handleError, jsonAsyncBody } = require( '../routes/middlewares/app-middleware');
const mung = require( 'express-mung');
const cookieParser = require( 'cookie-parser');
const createLocaleMiddleware = require( 'express-locale');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
// export default
module.exports = (app, loadFirst) => {
  if (loadFirst) {
    app.disable('x-powered-by');
    app.use(logger('combined'));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    app.use(cors());
    app.use(createLocaleMiddleware());
    app.use(
      queryParams({
        format: 'sequelize',
        sequelizeOp: Sequelize.Op
      })
    );
    app.use(mung.json(jsonAsyncBody));
    app.use(cookieParser());
  } else {
    app.use(handleError);
  }
};
