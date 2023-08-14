import { Response, Request } from 'express';

export const listadoUsuarios = (req: Request, res: Response) => {
	res.json({ usuarios: 'TODOS LOS USUARIOS' });
};
