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
  body('description').isLength({ min: 5 })
];

router.post('/product', productValidators, addProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', productValidators, updateProductById);
router.delete('/product/:id', deleteProductById);

const workerValidators = [
  body('firstName').isLength({ min: 5, max: 40 }),
  body('lastName').isLength({ min: 5, max: 40 }),
  body('role').isLength({ min: 5, max: 40 }),
  body('salary').isCurrency(),
  body('description')
];

router.post('/worker', workerValidators, addWorker);
router.get('/workers', getAllWorkers);
router.get('/worker/:id', getWorkerById);
router.put('/worker/:id', workerValidators, updateWorkerById);
router.delete('/worker/:id', deleteWorkerById);

const wareHouseValidators = [
  body('name').isLength({ min: 3, max: 50 }),
  body('rentalCost').isCurrency()
  .custom((value) => {
    const minValue = 0;
    const numericValue = parseFloat(value);

    return numericValue < minValue ?
      Promise.reject(`Rental cost must be more then ${minValue}`) :
      true;
  }),
  body('assignmentDate').isDate(),
  body('productIds').isArray(),
  body('workerIds').isArray()
];

router.post('/wareHouse', wareHouseValidators, addWareHouse);
router.get('/wareHouses', getAllWareHouses);
router.put('/wareHouse/:id', wareHouseValidators, updateWareHouseById);

export default router;