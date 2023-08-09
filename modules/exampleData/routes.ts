import express, { Request, Response } from 'express';
import { crearPingPong, ping, pong } from './services';

const routerExample = express.Router();

routerExample.get('/ping', ping);
routerExample.get('/pong', pong);
routerExample.post('/post', crearPingPong);
export default routerExample;
