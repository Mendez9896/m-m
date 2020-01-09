import {Router} from 'express';
const router = Router();
router.route('/').get((req, res)=>{
    res.json('servicio rest');
})
export default router;