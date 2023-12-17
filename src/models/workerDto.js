export default class WorkerDto {
  
  constructor({ id, firstName, lastName, role, salary, wareHouseId }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.salary = salary;
    this.wareHouseId = wareHouseId;
  }
}