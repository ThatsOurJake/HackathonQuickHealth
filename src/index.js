import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';

import config from './config';
import publicRouter from './routes/public';
import gettingStarted from './getting-started';

const app = new Koa();

app.use(koaBodyParser());
app.use(publicRouter.routes()).use(publicRouter.allowedMethods());

if (!config.verificationToken || !config.pageToken) {
  throw new Error('Verification token and page token must be set');
}

app.listen(config.port, async () => {
  await gettingStarted.setup();
  console.log(`Listening on port: ${config.port}`);
});
