import UserController from '../routes/controllers/user-controller';
import ProductController from '../routes/controllers/product-controller';

export default app => {
  app.use('/user', UserController);
  app.use('/product', ProductController);
};
