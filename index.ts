import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('HOLA DESDE LA API');
});

app.listen(1000, () => {
	console.log(`⚡️ SERVER API IS RUNNING http://localhost:1000`);
});
