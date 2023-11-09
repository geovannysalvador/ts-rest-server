import {Router} from 'express';
import { deleteUsuario, getusuario, getusuarios, postUsuario, putUsuario } from '../controllers/usuarios';

const router = Router();


router.get('/', getusuarios);
router.get('/:id', getusuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);





export default router;