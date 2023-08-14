import axios from 'axios';
import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
	let config = {
		method: 'get',
		maxBodyLength: Infinity,
		url: 'https://apis.datos.gob.ar/georef/api/provincias?nombre=Ciudad%20de%20Buenos%20Aires',
		headers: {},
	};

	axios
		.request(config)
		.then((response) => {
			console.log(JSON.stringify(response.data));
			res.json(JSON.stringify(response.data));
		})
		.catch((error) => {
			console.log(error);
		});
};

export const pong = (req: Request, res: Response) => {
	res.send('¡PONG');
};
export const crearPingPong = (req: Request, res: Response) => {
	const { ping, pong } = req.body;
	res.status(201).json({ message: 'ping creado', data: { ping, pong } });
};
