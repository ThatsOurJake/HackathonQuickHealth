import journeyFactory from '../journey-factory';

import burns from './burns';

const steps = {
  HELP_SOMEONE: [
    {
      type: 'quickReplies',
      text: 'What might you need help with?',
      replies: [
        {
          title: 'CPR',
          payload: 'HELP_SOMEONE_CPR',
        },
        {
          title: 'Choking',
          payload: 'HELP_SOMEONE_CHOKING',
        },
        {
          title: 'Burns, Scalds or Cuts',
          payload: 'HELP_SOMEONE_BURNS',
        },
        {
          title: 'None of the above',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  HELP_SOMEONE_CPR: [
    {
      type: 'quickReplies',
      text: 'This journey was no implemented.',
      replies: [
        {
          title: 'Okay',
          payload: 'MENU',
        },
      ],
    },
  ],
  ...burns,
};

export default journeyFactory(steps);
