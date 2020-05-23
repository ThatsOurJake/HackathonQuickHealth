import emContacts from '../emergency-number/contacts';

export default {
  DIAGNOSIS_2: [
    {
      type: 'quickReplies',
      text: 'Is the casualty showing signs of difficulty breathing?',
      replies: [
        {
          title: 'Yes',
          payload: 'DIAGNOSIS_2_1',
        },
        {
          title: 'No',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  DIAGNOSIS_2_1: [
    {
      type: 'quickReplies',
      text: 'Is the casualty showing signs of nausea?',
      replies: [
        {
          title: 'Yes',
          payload: 'DIAGNOSIS_2_2',
        },
        {
          title: 'No',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  DIAGNOSIS_2_2: [
    {
      type: 'text',
      text: 'This could be signs of an anaphylaxis shock? (severe allergic reaction)',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'You should call for an ambulance 🚑',
      waitFor: 0.5,
    },
    ...emContacts,
    {
      type: 'text',
      text: 'If they have medication, encourage the causality to use it',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Remove the root cause',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Sit the casualty down if responsive',
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
