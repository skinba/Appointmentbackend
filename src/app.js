import express from "express";
import mongoose from "mongoose";
import {
    router
} from "./config/routes";
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './config/swagger';

import logger from 'morgan';
import cors from 'cors';
import { devConfig } from "./config/env/development";
import passport from "passport";
import { configureJWTStrategy } from "./api/middlewares/passport-jwt";


mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${devConfig.database}`, {
    useFindAndModify: false
});
const app = express();
const PORT = devConfig.port;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api', router);
app.use(logger('dev'));
app.use(passport.initialize());
configureJWTStrategy();
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.message = 'Invalid Route';
    error.status = 404;
    next(error);

});
// app.use(
//     '/api-docs',
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerDocument, {
//         explorer: true,
//     })
// );
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message,
        },
    });
});


app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to appointment app'
    })
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);

})