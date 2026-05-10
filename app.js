import express from 'express';
import {createServer} from 'http';
import 'dotenv/config'
import logger from 'morgan';

import router from './routers/index.js';

const app = express();
const server = createServer(app);
//logger
app.use(logger('dev'))
//view engin setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//transform post body req.body
app.use(express.json());

//request hendler
app.use(router);


const { PORT = 3000, HOST = 'localhost' } = process.env;
server.listen(+PORT, HOST,()=>{
    console.log(`Server run on ${HOST}:${PORT}`);
});


