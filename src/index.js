import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';

import config from './config';
import publicRouter from './routes/public';

const app = new Koa();

app.use(koaBodyParser());
app.use(publicRouter.routes()).use(publicRouter.allowedMethods());

if (!config.verificationToken || !config.pageToken) {
  throw new Error('Verification token and page token must be set');
}

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
