export default class WareHouseDto {
  
  constructor({ id, name, rentalCost = 0, assignmentDate, productIds, workerIds }) {
    this.id = id;
    this.name = name;
    this.rentalCost = rentalCost;
    this.assignmentDate = assignmentDate;
    this.products = productIds;
    this.workers = workerIds;
  }
}