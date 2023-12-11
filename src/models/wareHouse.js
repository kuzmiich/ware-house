export class WareHouse {
  
  constructor(id, name, rentalCost = 0, assignmentDate, products, workers) {
    this.id = id;
    this.name = name;
    this.rentalCost = rentalCost;
    this.assignmentDate = assignmentDate;
    this.products = products;
    this.workers = workers;
  }

  get totalRevenues() {
    if (!(this.products && this.workers))
      return 0;

    return this.products.reduce((sum, current) => sum + current.revenue, 0)
      - this.workers.reduce((sum, current) => sum + current.salary, 0)
      - this.rentalCost;
  }
}