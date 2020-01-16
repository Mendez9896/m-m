import { Router } from 'express';
import { buscarPreguntas,busquedaEspecifica,insertarPregunta } from '../controllers/pregunta.controller';
import { TokenValidation } from '../libs/verifyToken';
const router = Router();
router.route('/create')
    .post(insertarPregunta)


router.route('/find')
    .get(buscarPreguntas);

router.route('/findEs')
    .get(busquedaEspecifica);    

export default router;