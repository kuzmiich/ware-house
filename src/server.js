import express from 'express';
import mongoose from 'mongoose';

import ResponseHelper from './constants.js';
import wareHouseRouter from './routes.js';
import { WareHouseMongoURI } from '../config/database.js';
import { initializeDatabase } from './services/initMongoDbService.js';

class Server {

  constructor() {
    this.app = express();
  }

  build() {
    this.app.use(express.json());

    mongoose.connect(WareHouseMongoURI, {})
      .then(() => {
        console.log('Mongo Db Connected !');
        
        const db = mongoose.connection.db;

        initializeDatabase(db);
      })
      .catch((err) => console.log(err));

    // routes
    this.app.use('/api/v1', wareHouseRouter);

    // 404 server exception middleware
    this.app.use((req, res) => {
      res.status(404).send({
        message: 'The requested URL could not be found.',
        statusCode: 404,
      });
    });

    // 500 unhandled exception middleware
    this.app.use((error, req, res, next) => {
      const { message } = ResponseHelper.serverError;
      const data = {
        Code: `${error.code ? error.code : ''}`,
        Stacktrace: `${error.stack}`
      };
      res.status(500).json({ message, data });
    });

    return this;
  }

  run() {

    const port = process.env.API_PORT || 1818;

    console.log(`User server started and listening on url - http://localhost:${port}/api/v1/products`);
  
    this.app.listen(port);
  }
}

new Server()
  .build()
  .run();