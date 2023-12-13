export default class ProductDto {

	constructor({ id, title, nettoCost, actualPrice, description, wareHouseId }) {
		this.id = id;
		this.title = title;
		this.nettoCost = nettoCost;
		this.actualPrice = actualPrice;
		this.description = description;
		this.wareHouseId = wareHouseId;
    this.revenue = this.Revenue;
	}
	
	get Revenue() {
		if (!(this.actualPrice && this.nettoCost))
			return 0;

		return this.actualPrice - this.nettoCost;
	}
}