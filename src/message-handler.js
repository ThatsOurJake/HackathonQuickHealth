import axios from 'axios';

import config from './config';
import getStartedHandler from './handlers/get-started';
import routeHandler from './handlers/router';

export const sendMessage = async (senderId, message) => {
  try {
    await axios.post(
      'https://graph.facebook.com/v7.0/me/messages',
      {
        recipient: {
          id: senderId,
        },
        message,
      },
      {
        params: {
          access_token: config.pageToken,
        },
      }
    );

    console.log('Message sent!');
  } catch (error) {
    if (error.response) {
      console.error(error.response);
    } else {
      console.error(error);
    }
  }
};

export const handleMessage = (senderId, message) => {
  if (message.text) {
    const quickReply = message.quick_reply.payload;
    routeHandler(senderId, quickReply);
  }
};

export const handlePostback = async (senderId, postback) => {
  if (postback.payload) {
    const payload = postback.payload;

    switch (payload) {
      case 'GET_STARTED':
        await getStartedHandler(senderId);
        break;
      default:
        console.warn(`Unknown: ${payload}`);
        break;
    }
  }
};
