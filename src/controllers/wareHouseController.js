import { WareHouseService } from '../services/wareHouseService.js';
import { ProductService } from '../services/productService.js';
import { WorkerService } from '../services/workerService.js';
import WareHouseDto from '../models/wareHouseDto.js';
import WareHouseFullDto from '../models/wareHouseFullDto.js';
import ProductDto from '../models/productDto.js';
import WorkerDto from '../models/workerDto.js';
import ResponseHelper from '../constants.js';

const productService = new ProductService();
const workerService = new WorkerService();
const wareHouseService = new WareHouseService();

export async function getAllWareHouses(req, res, next) {
  try {
    const response = await wareHouseService.getAllWareHouses(req);
    res.statusCode = response.statusCode;
    
    let wareHousesPromises = response.data.map(async wh => {
      const products = await getProducts(wh.productIds);
      const workers = await getWorkers(wh.workerIds);
      
      return new WareHouseFullDto({ 
        id: wh.id, 
        name: wh.name, 
        rentalCost: wh.rentalCost, 
        assignmentDate: wh.assignmentDate, 
        products: products, 
        workers: workers 
      });
    }) ?? [];
    
    let wareHouses = await Promise.all(wareHousesPromises);
    return res.json({ 
      message: response.message, 
      data: wareHouses
    });
  } catch (error) {
    next(error);
  }
}

export async function addWareHouse(req, res, next) {
  try {
    const response = await wareHouseService.addWareHouse(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new WareHouseDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function updateWareHouseById(req, res, next) {
  try {
    const response = await wareHouseService.updateWareHouseById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new WareHouseDto(response.data) });
  } catch (error) {
    next(error);
  }
}

async function getProducts(productIds) {
  let products = productIds?.map(async (id) => {
    let product = (await productService.getProductById({ params: { id: id } })).data;
    let productDto = new ProductDto(product);
    return productDto;
  }) ?? [];

  let resolvedProducts = await Promise.all(products);
  return [...resolvedProducts];
}

async function getWorkers(workerIds) {
  let workers = workerIds?.map(async (id) => {
    let worker = (await workerService.getWorkerById({ params: { id: id } })).data;
    let workerDto = new WorkerDto(worker);
    return workerDto;
  }) ?? [];

  let resolvedWorkers = await Promise.all(workers);
  return [...resolvedWorkers];
}