import emContacts from '../emergency-number/contacts';

export default {
  HELP_SELF_CHOKING: [
    {
      type: 'text',
      text: '⚠ This action is for a choking adult ⚠',
    },
    {
      type: 'type',
      text: 'Ring your local emergency number',
    },
    ...emContacts,
    {
      type: 'text',
      text: 'Place device where you can see',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Grasp your first with the other hand and bend over a hard surface',
    },
    {
      type: 'text',
      text: 'Shove your first inward and upward up to *5* times',
    },
    {
      type: 'image',
      url:
        'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2017/09/22/17/06/self-heimlich-maneuver-8col.jpg',
      waitFor: 1,
    },
    {
      type: 'quickReplies',
      text: 'There is a chance you will cough it up, still seek medical advice.',
      replies: [
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
};
