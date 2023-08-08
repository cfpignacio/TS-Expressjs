import { Request, Response, NextFunction } from 'express';

export const logParam = (req: Request, res: Response, next: NextFunction) => {
	if (+req.params.usuarioId > 2) {
		res.json({
			msg: 'El id del usuario no se encuentra en el rango disponible',
		});
	} else {
		console.log('El cliente busco al usuario: ' + req.params.usuarioId);
		next();
	}
};
