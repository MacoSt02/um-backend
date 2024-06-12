import Router from 'koa-router';
import welcomeRoutes from './welcome/welcome.routes';
import usersRoutes from './users/users.routes';

const router = new Router();

router.use(welcomeRoutes.routes());
router.use(usersRoutes.routes());

export default router;
