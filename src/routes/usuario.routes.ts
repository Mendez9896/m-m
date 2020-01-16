import { Router } from 'express';
import { crearUsuario, obtenerUsuarios, login, listUsuarios } from '../controllers/usuario.controller';
import { TokenValidation } from '../libs/verifyToken';

const router = Router();
router.route('/create')
    .post(crearUsuario)


router.route('/login')
    .post(login)
    .get(TokenValidation, listUsuarios);

export default router;
