import ResponseHelper from '../constants.js';
import WareHouseSchema from '../models/wareHouse.js';

export class WareHouseService {

  constructor() {
    this.wareHouseSchema = WareHouseSchema;
  }

  async getAllWareHouses() {
    const response = {};
    const wareHouses = await this.wareHouseSchema.find({});
    
    if (!wareHouses) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }
    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = wareHouses;
    return response;
  }

  async addWareHouse(req, products, workers) {
    const { name, rentalCost, assignmentDate } = req.body;
    const response = {};

    const addedWorker = await this.wareHouseSchema.create({ name, rentalCost, assignmentDate, products, workers });

    if (!addedWorker) {
      response.message = ResponseHelper.serverError.message;
      response.statusCode = ResponseHelper.serverError.statusCode;
      return response;
    }
    response.message = ResponseHelper.requestCreated.message;
    response.statusCode = ResponseHelper.requestCreated.statusCode;
    response.data = addedWorker;
    return response;
  }

  async updateWareHouseById(req, products, workers) {
    const { name, rentalCost, assignmentDate }  = req.body;
    const response = {};
    const { id } = req.params;
    
    const updatedWorker = await this.wareHouseSchema.findOneAndUpdate({ '_id': id },
      { $set: { name, rentalCost, assignmentDate, products, workers } },
      { new: true });

    if (!updatedWorker) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }

    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = updatedWorker;
    return response;
  }
}