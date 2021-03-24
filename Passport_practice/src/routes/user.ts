import { Router } from 'express';
import { Register, Login } from '../controller/user';
const router = Router();

router.post('/register', Register);
router.get('/login', Login);

export default router;
