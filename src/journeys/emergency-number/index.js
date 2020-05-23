import journeyFactory from '../journey-factory';

import emergencyContact from './contacts';

const steps = {
  EM_NUMBER: [
    ...emergencyContact,
    {
      type: 'quickReplies',
      text:
        'If your number is not listed on there this page might help: https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers',
      replies: [
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
};

export default journeyFactory(steps);
