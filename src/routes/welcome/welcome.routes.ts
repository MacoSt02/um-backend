import Router from 'koa-router';

const welcomeRoutes = new Router({
    prefix: '/welcome',
});

// GET

welcomeRoutes.get('/', async (ctx) => {
    ctx.body = 'Benvingut Marc';
});


export default welcomeRoutes;
