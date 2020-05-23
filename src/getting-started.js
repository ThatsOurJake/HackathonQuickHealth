import axios from 'axios';

import config from './config';

export default {
  setup: async () => {
    try {
      await axios.post(
        'https://graph.facebook.com/v2.6/me/messenger_profile',
        {
          get_started: {
            payload: 'GET_STARTED',
          },
        },
        {
          params: {
            access_token: config.pageToken,
          },
        }
      );
    } catch (error) {
      if (error.response) {
        console.error(error.response);
      } else {
        console.error(console.error);
      }
    }
  },
};
