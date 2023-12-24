export default class ProductDto {

	constructor({ id, title, nettoCost, actualPrice, description }) {
		this.id = id;
		this.title = title;
		this.nettoCost = parseFloat(nettoCost.toString());
		this.actualPrice = parseFloat(actualPrice.toString());
		this.description = description;
    this.revenue = this.Revenue;
	}
	
	get Revenue() {
		if (!!this.actualPrice || !!this.nettoCost)
			return this.actualPrice - this.nettoCost;

		return 0;
	}
}