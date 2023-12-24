import { Decimal128 } from 'mongodb';
import { Schema, mongoose } from 'mongoose';

const WorkerSchema = new Schema({
  firstName: {
		type: String,
		required: true
	},
  lastName: {
		type: String,
		required: true
	},
  role: {
		type: String,
		required: true
	}, 
  salary: {
		type: Decimal128,
		required: true
	}, 
  wareHouseId: {
		type: String,
		required: true
	}
}, 
{
	collection: 'workers'
});

export default mongoose.model('Worker', WorkerSchema);