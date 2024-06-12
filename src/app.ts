import koa from 'koa';
import 'reflect-metadata';
import bodyparser from 'koa-bodyparser';
import loggerKoa from 'koa-logger';
import cors from 'koa2-cors';
import mount from 'koa-mount';
import auth from 'koa-basic-auth';
import router from './routes/router';
import 'dotenv/config';

// init
const app = new koa();
// middlewares
app.use(cors()); // Add authorized origins
app.use(loggerKoa());
app.use(bodyparser());
app.use(
    mount(
        '/health',
        auth({
            name: 'admin',
            pass: 'admin',
        }),
    ),
);

app.use(async (ctx, next) => {
    if (ctx.path === '/health') {
        ctx.status = 200;
        ctx.body =  {
          nodeVersion: process.version,
          service: 'TypeScriptNode',
          memory: process.memoryUsage(),
          pid: process.pid,
          uptime: process.uptime(),
          environment: 'dev',
          appVersionPackage: "1.0.0",
          };
    } else {
        await next();
    }
});

// jwt
// Middleware below this line is only reached if JWT token is valid
// app.use(jwt({ secret: `${process.env.JWT_TOKEN}` }).unless({ path: [/^\/auth/] }));

// routes
app.use(router.routes());

// export server
export default app;
