import { ProductService } from '../services/productService.js';
import ProductDto from '../models/productDto.js';

const productService = new ProductService();

export async function addProduct(req, res, next) {
  try {
    const response = await productService.addProduct(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new ProductDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function getAllProducts(req, res, next) {
  try {
    const response = await productService.getAllProducts(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data.map(p => new ProductDto(p)) });
  } catch (error) {
    next(error);
  }
}

export async function getProductById(req, res, next) {
  try {
    const response = await productService.getProductById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new ProductDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function updateProductById(req, res, next) {
  try {
    const response = await productService.updateProductById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new ProductDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function deleteProductById(req, res, next) {
  try {
    const response = await productService.deleteProductById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new ProductDto(response.data) });
  } catch (error) {
    next(error);
  }
}