import emContacts from '../emergency-number/contacts';

export default {
  DIAGNOSIS_3: [
    {
      type: 'quickReplies',
      text: 'Shortness of breath?',
      replies: [
        {
          title: 'Yes',
          payload: 'DIAGNOSIS_3_1',
        },
        {
          title: 'No',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  DIAGNOSIS_3_1: [
    {
      type: 'quickReplies',
      text: 'Pain in arms, back and neck?',
      replies: [
        {
          title: 'Yes',
          payload: 'DIAGNOSIS_3_2',
        },
        {
          title: 'No',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  DIAGNOSIS_3_2: [
    {
      type: 'text',
      text: 'This is signs of a heart attack',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: '⚠ An ambulance should be called immediately ⚠',
    },
    ...emContacts,
    {
      type: 'text',
      text: 'Sit casualty down, draw up the legs in a position that is conformable',
    },
    {
      type: 'image',
      url:
        'https://www.sja.org.uk/globalassets/first-aid-steps-illustrations/heart-attack/social-heart-attack-first-aid.png',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Loosen restrictive clothing, keep casualty warm and comfortable',
      waitFor: 0.5,
    },
    {
      type: 'quickReplies',
      text: 'Monitor the casualties airways and breathing and be on stand bye in case basic life support is needed',
      replies: [
        {
          title: 'Life support is needed!',
          payload: 'HELP_SOMEONE_CPR',
        },
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
};
