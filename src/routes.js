import { Router } from 'express';
import { body } from 'express-validator';
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from './controllers/productController.js';
import { addWorker, getAllWorkers, getWorkerById, updateWorkerById, deleteWorkerById } from './controllers/workerController.js';
import { addWareHouse, updateWareHouseById, getAllWareHouses } from './controllers/wareHouseController.js';

const router = Router();

const productValidators = [
  body('title').isLength({ min: 5, max: 40 }),
  body('nettoCost').isCurrency(),
  body('actualPrice').isCurrency(),
  body('description').isLength({ min: 5 }),
  body('wareHouseId').isNumeric()
];

router.post('/product', addProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', deleteProductById);

router.post('/worker', addWorker);
router.get('/workers', getAllWorkers);
router.get('/worker/:id', getWorkerById);
router.put('/worker/:id', updateWorkerById);
router.delete('/worker/:id', deleteWorkerById);

router.post('/wareHouse', addWareHouse);
router.get('/wareHouses', getAllWareHouses);
router.put('/wareHouse/:id', updateWareHouseById);

export default router;