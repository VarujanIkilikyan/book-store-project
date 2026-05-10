import express from 'express';
import {createServer} from 'http';
import 'dotenv/config'

const app = express();
const server = createServer(app);
const { PORT = 3000, HOST = 'localhost' } = process.env;
server.listen(+PORT, HOST,()=>{
    console.log(`Server run on ${HOST}:${PORT}`);
});


