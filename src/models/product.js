import { Decimal128 } from 'mongodb';
import { Schema, mongoose } from 'mongoose';

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	nettoCost: {
		type: Decimal128,
		required: true
	},
	actualPrice: {
		type: Decimal128,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	wareHouseId: {
		type: String,
		required: true
	}
}, 
{
	collection: 'products'
});

export default mongoose.model('Product', ProductSchema);