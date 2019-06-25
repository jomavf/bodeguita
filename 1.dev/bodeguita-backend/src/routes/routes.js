import UserController from './controllers/user-controller';
import ProductController from './controllers/product-controller';

export default app => {
  app.use('/user', UserController);
  app.use('/product', ProductController);
};
