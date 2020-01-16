import { Router } from 'express';
import { buscarPreguntas,busquedaEspecifica,insertarPregunta } from '../controllers/pregunta.controller';
import { TokenValidation } from '../libs/verifyToken';
const router = Router();
router.route('/create')
    .post(insertarPregunta)


router.route('/find')
    .get(buscarPreguntas);

export default router;