import { Router } from 'express';
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from './controllers/productController.js';

const router = Router();

router.post('/product/add', addProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', deleteProductById);

export default router;