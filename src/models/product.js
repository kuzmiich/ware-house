import { Schema, mongoose } from 'mongoose';

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	nettoCost: {
		type: Number,
		required: true
	},
	actualPrice: {
		type: Number,
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