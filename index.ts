import express, { Express, Request, Response } from 'express';
import { logParam } from './logMiddleware';
import routerExample from './modules/exampleData/routes';
import bodyParser from 'body-parser';

const app: Express = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {});
app.use('/api', routerExample);

app.get('/usuarios/:usuarioId', logParam, (req: Request, res: Response) => {
	const usuarios: Array<any> = [
		{
			id: 1,
			email: 'usuario1@example.com',
			nombre: 'Ignacio',
			apellido: 'Pérez',
			edad: 28,
			activo: true,
		},
		{
			id: 2,
			email: 'usuario2@example.com',
			nombre: 'María',
			apellido: 'González',
			edad: 35,
			activo: false,
		},
	];
	// Fix con filter
	const u = usuarios.filter((u) => u.id == req.params.usuarioId);

	if (u.length <= 0) {
		res.status(500).json({
			msg: `No se encontro ningun usuario con el id: ${req.params.usuarioId}`,
		});
	}

	res.json(u);
});

app.listen(1000, () => {
	console.log(`⚡️ SERVER API IS RUNNING http://localhost:1000`);
});
