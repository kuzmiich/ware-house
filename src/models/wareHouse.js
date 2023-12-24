import { Schema, mongoose } from 'mongoose';

const WareHouseSchema = new Schema({
  name: {
		type: String,
		required: true
	},
  rentalCost: {
		type: String,
		required: true
	},
  assignmentDate: {
		type: Date,
		required: true
	},
  productIds: {
    type: [],
    required: false
  },
  workerIds: {
    type: [],
    required: false
  },
}, 
{
	collection: 'wareHouses'
});

export default mongoose.model('WareHouse', WareHouseSchema);