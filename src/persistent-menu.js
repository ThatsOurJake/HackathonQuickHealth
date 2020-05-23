import axios from 'axios';

import config from './config';

export default {
  setup: async (senderId) => {
    try {
      console.log('Setting persistent menu');

      await axios.post(
        'https://graph.facebook.com/v7.0/me/custom_user_settings',
        {
          psid: senderId,
          persistent_menu: [
            {
              locale: 'default',
              composer_input_disabled: true,
              call_to_actions: [
                {
                  type: 'postback',
                  title: 'Diagnosis',
                  payload: 'DIAGNOSIS',
                },
                {
                  type: 'postback',
                  title: 'Help me',
                  payload: 'HELP_ME',
                },
                {
                  type: 'postback',
                  title: 'Help someone',
                  payload: 'HELP_SOMEONE',
                },
              ],
            },
          ],
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
