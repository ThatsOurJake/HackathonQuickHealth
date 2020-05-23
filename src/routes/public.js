import KoaRouter from 'koa-router';

import config from '../config';
import { handleMessage, handlePostback } from '../message-handler';

const router = new KoaRouter();

router.post('/incoming', (ctx) => {
  const body = ctx.request.body;

  if (body.object === 'page') {
    body.entry.forEach((entry) => {
      const event = entry.messaging[0];
      const senderId = event.sender.id;

      if (event.message) {
        handleMessage(senderId, event.message);
      } else if (event.postback) {
        handlePostback(senderId, event.postback);
      }
    });

    ctx.body = 'EVENT_RECEIVED';
    return;
  }

  ctx.status = 404;
});

router.get('/incoming', (ctx) => {
  const mode = ctx.query['hub.mode'];
  const token = ctx.query['hub.verify_token'];
  const challenge = ctx.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === config.verificationToken) {
      console.log('Webhook Verified');
      ctx.body = challenge;
      return;
    }
  }

  ctx.status = 403;
});

export default router;
