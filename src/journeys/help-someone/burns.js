import emContacts from '../emergency-number/contacts';

export default {
  HELP_SOMEONE_BURNS: [
    {
      type: 'quickReplies',
      text: 'Is it a burn & scald or a cut?',
      replies: [
        {
          title: 'Burn / Scald',
          payload: 'HELP_SOMEONE_BURNS_1',
        },
        {
          title: 'Cut',
          payload: 'HELP_SOMEONE_BURNS_2',
        },
      ],
    },
  ],
  HELP_SOMEONE_BURNS_1: [
    {
      type: 'text',
      text: 'Get the causality away from the cause of the burn and disable if it is *safe*!',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Cool the burn under lukewarm / cold for a minimum of 10 minutes',
    },
    {
      type: 'text',
      text: '⚠️ Do NOT use ice, iced water or creams ⚠️',
      waitFor: 1,
    },
    {
      type: 'quickReplies',
      text: 'Is the burn chemical or acid related?',
      replies: [
        {
          title: 'Yes',
          payload: 'HELP_SOMEONE_BURNS_1_1',
        },
        {
          title: 'No',
          payload: 'HELP_SOMEONE_BURNS_1_2',
        },
      ],
    },
  ],
  HELP_SOMEONE_BURNS_1_1: [
    ...emContacts,
    {
      type: 'quickReplies',
      text: 'Would you like to continue with the help?',
      replies: [
        {
          title: 'Yes',
          payload: 'HELP_SOMEONE_BURNS_1_2',
        },
        {
          title: 'No',
          payload: 'MENU',
        },
      ],
    },
  ],
  HELP_SOMEONE_BURNS_1_2: [
    {
      type: 'text',
      text: 'Remove any clothing or jewellery unless its stuck to the skin',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Cover the burn using a layer of cling film or a clean plastic bag if it the hands',
      waitFor: 1,
    },
    {
      type: 'quickReplies',
      text:
        'For extra information on burns and scalds you can visit: https://www.nhs.uk/conditions/burns-and-scalds/treatment/',
      replies: [
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
  HELP_SOMEONE_BURNS_2: [
    {
      type: 'quickReplies',
      text: 'What kind of cut is it?',
      replies: [
        {
          title: 'General',
          payload: 'HELP_SOMEONE_BURNS_2_1',
        },
      ],
    },
  ],
  HELP_SOMEONE_BURNS_2_1: [
    {
      type: 'text',
      text:
        'Stop any bleeding. Apply pressure to the area using something clean, dry and absorbent. This could be a bandage, towel or handkerchief for several minutes',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'If the cut is in the arm or hand. Raise it above the head 🙌🏻',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'If the cut is in the lower limb, lie down and raise the area above the head.',
      waitFor: 5,
    },
    {
      type: 'text',
      text: 'Once the wound has finished bleeding follow these steps',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Wash and dry hands thoroughly',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Clean wound under drinking water quality water',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Pat dry with a towel',
      waitFor: 1,
    },
    {
      type: 'quickReplies',
      text: 'Apply a sterile adhesive dressing, such as a plaster. Need help with that?',
      replies: [
        {
          title: 'Yes',
          payload: 'HELP_SOMEONE_BURNS_2_1_1',
        },
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
  HELP_SOMEONE_BURNS_2_1_1: [
    {
      type: 'quickReplies',
      text:
        'Sure here a link that can do a better job than me: https://www.nhs.uk/common-health-questions/accidents-first-aid-and-treatments/how-do-i-apply-plasters-and-other-dressings/',
      replies: [
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
};
