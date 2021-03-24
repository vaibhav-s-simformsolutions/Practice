import { Router } from 'express';
import { welcomepage } from '../controller/index';

const router = Router();

router.get('/', welcomepage);

export default router;
