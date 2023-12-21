import { WorkerService } from '../services/workerService.js';
import WorkerDto from '../models/workerDto.js';

const workerService = new WorkerService();

export async function addWorker(req, res, next) {
  try {
    const response = await workerService.addWorker(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new WorkerDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function getAllWorkers(req, res, next) {
  try {
    const response = await workerService.getAllWorkers(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data.map(p => new WorkerDto(p)) });
  } catch (error) {
    next(error);
  }
}

export async function getWorkerById(req, res, next) {
  try {
    const response = await workerService.getWorkerById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new WorkerDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function updateWorkerById(req, res, next) {
  try {
    const response = await workerService.updateWorkerById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new WorkerDto(response.data) });
  } catch (error) {
    next(error);
  }
}

export async function deleteWorkerById(req, res, next) {
  try {
    const response = await workerService.deleteWorkerById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: new WorkerDto(response.data) });
  } catch (error) {
    next(error);
  }
}