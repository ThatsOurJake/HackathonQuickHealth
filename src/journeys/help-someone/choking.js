import emContacts from '../emergency-number/contacts';

export default {
  HELP_SOMEONE_CHOKING: [
    {
      type: 'text',
      text: '⚠ This action is for a choking adult ⚠',
    },
    {
      type: 'text',
      text: 'We will first try back blows',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Stand slightly behind and to the side of the casualty, support there chest and lean them forward',
    },
    {
      type: 'image',
      url:
        'https://www.sja.org.uk/globalassets/first-aid-steps-illustrations/choking-adult/step3-adult-choking-first-aid-advice.png?preset=700_700&anchor=middlecenter',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Administer *5* sharp blows between the shoulder blades with the heel of your other hand',
    },
    {
      type: 'quickReplies',
      text: 'Did this work?',
      replies: [
        {
          title: 'No',
          payload: 'HELP_SOMEONE_CHOKING_1',
        },
        {
          title: 'Yes',
          payload: 'HELP_SOMEONE_CHOKING_2',
        },
      ],
    },
  ],
  HELP_SOMEONE_CHOKING_1: [
    {
      type: 'text',
      text: 'Stand behind and put both arms around the upper part of the abdomen, lean the casualty forward',
    },
    {
      type: 'image',
      url:
        'https://www.sja.org.uk/globalassets/first-aid-steps-illustrations/choking-adult/step4-adult-choking-first-aid-advice.png?preset=700_700&anchor=middlecenter',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Put one hand clenched, between naval and ribcage',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Grasp this hand with other hand, sharply pull upwards maximum *5* times',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Assess the causalities condition, if the obstruction is not relieved call an ambulance 🚑',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'Continue to do *5* back blows, then up to *5* abdominals until the paramedics turn up!',
      waitFor: 0.5,
    },
    {
      type: 'text',
      text: 'If the obstruction is freed you will still have to call for an ambulance',
      waitFor: 0.5,
    },
    ...emContacts,
    {
      type: 'quickReplies',
      text: 'Be alert basic life support might be needed',
      replies: [
        {
          title: 'Life support is needed!',
          payload: 'HELP_SOMEONE_CPR',
        },
        {
          title: 'Okay, all is sorted!',
          payload: 'MENU',
        },
      ],
    },
  ],
};
