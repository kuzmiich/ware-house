import ProductDto from './productDto.js'

export default class WareHouseFullDto {
  
  constructor({ id, name, rentalCost = 0, assignmentDate, products, workers }) {
    this.id = id;
    this.name = name;
    this.rentalCost = rentalCost;
    this.assignmentDate = assignmentDate;
    this.products = products;
    this.workers = workers;
    this.totalRevenues = this.TotalRevenues;
  }

  get TotalRevenues() {
    let productsTotalRevenue = this.products.reduce((sum, product) =>
    { 
      let productDto = new ProductDto(product);
      return sum + productDto.revenue;
    }, 0);

    return (!!this.products ? productsTotalRevenue : 0)
      - (!!this.workers ? this.workers.reduce((sum, worker) => sum + worker.salary, 0) : 0)
      - this.rentalCost;
  }
}