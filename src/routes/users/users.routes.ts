import Router from 'koa-router';
import connectDB from '../../database/connect';
import { Users } from '../../models/users/users.model';
import { UserData } from '../../types/users/request';

const usersRoutes = new Router({
    prefix: '/users',
});

// GET

usersRoutes.get('/', async (ctx) => {
    const userRepository = connectDB.getRepository(Users);
    const users = await userRepository.find();
    ctx.body = users;
});

usersRoutes.get('/:id', async (ctx) => {
    const userRepository = connectDB.getRepository(Users);
    const id = parseInt(ctx.params.id, 10);

    if (isNaN(id)) {
        ctx.throw(400, 'Invalid ID format');
    }

    const user = await userRepository.findOneBy({ id });

    if (!user) {
        ctx.throw(404, 'User not found');
    }
 
    ctx.body = user;
});

usersRoutes.post('/', async (ctx) => {
    const userRepository = connectDB.getRepository(Users);

    const userData:UserData = ctx.request.body as Users;

    try {
        const newUser = userRepository.create(userData);

        const savedUser = await userRepository.save(newUser);

        ctx.status = 201;
        ctx.body = 'User created correcly!!';
    } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error };
    }
});

export default usersRoutes;
