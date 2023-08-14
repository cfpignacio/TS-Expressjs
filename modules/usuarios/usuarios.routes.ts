// GET /usuario
// GET /usuario/1
import express from 'express';
import { listadoUsuarios } from './usuario.service';

const usuariosRoutes = express.Router();

usuariosRoutes.get('/', listadoUsuarios);

export default usuariosRoutes;
