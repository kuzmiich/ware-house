import { Schema, mongoose } from 'mongoose';
import ProductDto from './productDto';
import WorkerDto from './workerDto';

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
		type: String,
		required: true
	},
  product: {
    type: ProductDto,
    required: false
  },
  workers: {
    type: WorkerDto,
    required: false
  },
}, 
{
	collection: 'wareHouse'
});


export default mongoose.model('WareHouse', WareHouseSchema);