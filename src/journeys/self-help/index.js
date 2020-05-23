import journeyFactory from '../journey-factory';

import choking from './choking';

const steps = {
  HELP_SELF: [
    {
      type: 'quickReplies',
      text: 'What might you need help with?',
      replies: [
        {
          title: 'Choking',
          payload: 'HELP_SELF_CHOKING',
        },
        {
          title: 'Burns and Scalds',
          payload: 'HELP_SOMEONE_BURNS_1',
        },
        {
          title: 'Cuts / Bleeding',
          payload: 'HELP_SOMEONE_BURNS_2',
        },
        {
          title: 'None of the above',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  ...choking,
};

export default journeyFactory(steps);
