import 'dotenv/config';
import express from 'express';
import 'express-async-errors'
import cors from 'cors';

//endpoitns imports
import router from './routes';

//middlewares imports
import asyncErrors from './middlewares/errors';

const server = express()

server.use(express.json())
server.use(cors())

//endpoints
server.use(router)

//middlewares
server.use(asyncErrors)

server.listen(process.env.PORT, () => { 
    console.log('API ONLINE')
})