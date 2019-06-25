import express from 'express';
import 'express-async-errors';
import ProductService from '../../services/product-service';

const router = express.Router();
router
  .route('/')
  .get(ProductService.all)
  .post(ProductService.create);

router
  .route('/:id')
  .get(ProductService.findById)
  .patch(ProductService.update)
  .delete(ProductService.deleteById);

export default router;
