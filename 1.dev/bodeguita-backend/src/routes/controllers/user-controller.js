import express from 'express';
import 'express-async-errors';
import UserService from '../../services/user-service';
const router = express.Router();

router
  .route('/')
  .get(UserService.all)
  .post(UserService.create);
router.route('/login').post(UserService.login)
router.route('/:id').get(UserService.findById);
router.route('/:id').patch(UserService.update);
router.route('/:id').delete(UserService.deleteById);


export default router;
