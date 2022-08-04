import express from 'express';
import bodyparser from 'body-parser';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './src/entities/config';
import {router as sampleroute} from './src/routes/routes';

const app = express();

    mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
       console.log(`connected`)
    })
    .catch((error) => console.log(error));
  
    app.use(express.json({limit: '100mb'}));
    
    app.use("/",sampleroute);


http.createServer(app).listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
