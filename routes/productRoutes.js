 import express from 'express';
 const router = express.Router();

  //import { getAllProducts , getProductById, createProduct} from './controllers/productController.js';
//import { } from '../controllers/productcontroller';
import { getAllProducts, getProductById,  addProduct } from '../controllers/productcontroller.js';


  router.get('/', getAllProducts);
  router.get('/:id' , getProductById);
  router.post('/',  addProduct);

  export default router;