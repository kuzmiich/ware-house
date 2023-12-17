import ResponseHelper from '../constants.js';
import ProductSchema from '../models/product.js';

export class ProductService {

  constructor() {
    this.productSchema = ProductSchema;
  }

  async addProduct(req) {
    const { title, nettoCost, actualPrice, description, wareHouseId } = req.body;
    const response = {};

    if (!title || !nettoCost || !actualPrice || !description || !wareHouseId) {
      response.message = ResponseHelper.requestValidationError.message;
      response.statusCode = ResponseHelper.requestValidationError.statusCode;
      return response;
    }

    const product = await this.productSchema.create({ title, nettoCost, actualPrice, description, wareHouseId });

    if (!product) {
      response.message = ResponseHelper.serverError.message;
      response.statusCode = ResponseHelper.serverError.statusCode;
      return response;
    }
    response.message = ResponseHelper.requestCreated.message;
    response.statusCode = ResponseHelper.requestCreated.statusCode;
    response.data = product;
    return response;
  }

  async getAllProducts() {
    const response = {};
    const products = await this.productSchema.find({});
    
    if (!products) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }
    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = products;
    return response;
  }

  async getProductById(req) {
    const response = {};
    const { id } = req.params;

    const product = await this.productSchema.findOne({ '_id': id });

    if (!product) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }
    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = product;
    return response;
  }

  async updateProductById(req) {
    const { title, nettoCost, actualPrice, description, wareHouseId } = req.body;
    const response = {};
    const { id } = req.params;
    
    const updatedProduct = await this.productSchema.findOneAndUpdate({ '_id': id },
      { $set: { title, nettoCost, actualPrice, description, wareHouseId } },
      { new: true });

    if (!updatedProduct) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }

    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = updatedProduct;
    return response;
  }

  async deleteProductById(req) {
    const response = {};
    const { id } = req.params;

    const deletedProduct = await this.productSchema.findOneAndDelete({ '_id': id });

    if (!deletedProduct) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }

    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = deletedProduct;
    return response;
  }
}