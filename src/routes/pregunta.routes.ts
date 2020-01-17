import { Router } from 'express';
import { buscarPreguntas,busquedaEspecifica,insertarPregunta, getInfoPregunta, deletePregunta, updatePregunta } from '../controllers/pregunta.controller';
import { TokenValidation } from '../libs/verifyToken';
const router = Router();
router.route('/create')
    .post(insertarPregunta)


router.route('/find')
    .get(buscarPreguntas);

router.route('/findEs')
    .get(busquedaEspecifica);   

router.route('/findInf')
    .get(getInfoPregunta);   

router.route('/update')
    .put(updatePregunta);
router.route('/delete').delete(deletePregunta);

export default router;