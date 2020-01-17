import { Router } from 'express';
import { createUsuario,getUsuario, getUsuarios,updateUsuario,deleteUsuario,login, listUsuarios } from '../controllers/usuario.controller';
import { TokenValidation } from '../libs/verifyToken';

const router = Router();

router.route('/create').post(createUsuario);
router.route('/').get(getUsuarios);
router.route('/:id').get(getUsuario);
router.route('/update/:id').put(updateUsuario);
router.route('/delete/:id').delete(deleteUsuario);


router.route('/login')
    .post(login)
    .get(TokenValidation, listUsuarios);

export default router;
