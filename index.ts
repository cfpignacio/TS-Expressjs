import express, { Express } from 'express';
import bodyParser from 'body-parser';
import usuariosRoutes from './modules/usuarios/usuarios.routes';

const app: Express = express();
app.use(bodyParser.json());

app.use('/usuario', usuariosRoutes);

app.listen(1000, () => {
	console.log(`âš¡ï¸ SERVER API IS RUNNING http://localhost:1000`);
});
