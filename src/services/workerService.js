import ResponseHelper from '../constants.js';
import WorkerSchema from '../models/worker.js';

export class WorkerService {

  constructor() {
    this.workerSchema = WorkerSchema;
  }

  async getAllWorkers() {
    const response = {};
    const workers = await this.workerSchema.find({});
    
    if (!workers) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }
    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = workers;
    return response;
  }

  async addWorker(req) {
    const { firstName, lastName, role, salary, wareHouseId } = req.body;
    const response = {};

    const addedWorker = await this.workerSchema.create({ firstName, lastName, role, salary, wareHouseId });

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

  async getWorkerById(req) {
    const response = {};
    const { id } = req.params;

    const worker = await this.workerSchema.findOne({ '_id': id });

    if (!worker) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }
    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = worker;
    return response;
  }

  async updateWorkerById(req) {
    const { firstName, lastName, role, salary, wareHouseId } = req.body;
    const response = {};
    const { id } = req.params;
    
    const updatedWorker = await this.workerSchema.findOneAndUpdate({ '_id': id },
      { $set: { firstName, lastName, role, salary, wareHouseId } },
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

  async deleteWorkerById(req) {
    const response = {};
    const { id } = req.params;

    const deletedWorker = await this.workerSchema.findOneAndDelete({ '_id': id });

    if (!deletedWorker) {
      response.message = ResponseHelper.recordNotFound.message;
      response.statusCode = ResponseHelper.recordNotFound.statusCode;
      return response;
    }

    response.message = ResponseHelper.success.message;
    response.statusCode = ResponseHelper.success.statusCode;
    response.data = deletedWorker;
    return response;
  }
}