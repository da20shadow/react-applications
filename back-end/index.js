import express from 'express';
import cookieParser from 'cookie-parser';
import {dbInit} from "./config/index.js";
import routes from './routes.js';
import {ENV} from "./constants/index.js";
import {authToken, CORS} from "./middlewares/index.js";
import bodyParser from 'body-parser'

const app = express();

//Adding body parser
app.use(bodyParser.json());

//Add cookie parser
app.use(cookieParser());

//Set CORS
app.use(CORS);

//Check if there is a token
app.use(authToken);

//Add routes
app.use(routes);


//Connect with db and run the server!
dbInit().then(() => {
    app.listen(ENV.PORT, () => {
        console.log(`The server is running on port ${ENV.PORT}...`)
    })
}).catch(error => {
    console.log(`Error: ${error.message}`);
});


