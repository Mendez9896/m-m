import { Router } from 'express';
import { buscarPreguntas,busquedaEspecifica,insertarPregunta,updatePreguntas,deleteUser } from '../controllers/pregunta.controller';
import { TokenValidation } from '../libs/verifyToken';
const router = Router();
router.route('/create')
    .post(insertarPregunta)


router.route('/find')
    .get(buscarPreguntas);

router.route('/findEs')
    .get(busquedaEspecifica); 
  
router.route('/update')
    .put(updatePreguntas); 
    
router.route('/delete')
    .delete(deleteUser);    

export default router;