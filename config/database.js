import dotenv from 'dotenv';
dotenv.config();

export const WareHouseMongoURI = `mongodb://localhost:27017/${process.env.WAREHOUSE_DATABASE_NAME}`;