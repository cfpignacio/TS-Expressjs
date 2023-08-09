import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
	res.send('¡PING');
};

export const pong = (req: Request, res: Response) => {
	res.send('¡PONG');
};
export const crearPingPong = (req: Request, res: Response) => {
	const { ping, pong } = req.body;
	res.status(201).json({ message: 'ping creado', data: { ping, pong } });
};
