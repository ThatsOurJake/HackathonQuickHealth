import { forEachSeries } from 'p-iteration';

import { sendMessage } from '../message-handler';
import textMessage from '../utils/text-message';
import quickReplies from '../utils/quick-replies';
import imageMessage from '../utils/image-message';

export default (steps) => async (senderId, payload) => {
  const step = steps[payload];

  if (!step) {
    console.error(`Unknown flow: ${payload}`);
    return;
  }

  await forEachSeries(step, async (action) => {
    if (action.type === 'text') {
      await sendMessage(senderId, textMessage(action.text));
    } else if (action.type === 'quickReplies') {
      await sendMessage(senderId, quickReplies(action.text, action.replies));
    } else if (action.type === 'image') {
      await sendMessage(senderId, imageMessage(action.url));
    }

    if (action.waitFor) {
      await new Promise((resolve) => setTimeout(resolve, action.waitFor * 1000));
    }
  });
};
