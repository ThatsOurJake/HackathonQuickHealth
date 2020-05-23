export default {
  DIAGNOSIS_1: [
    {
      type: 'quickReplies',
      text: 'Is the casualty showing signs of nausea and thirst',
      replies: [
        {
          title: 'Yes',
          payload: 'DIAGNOSIS_1_1',
        },
        {
          title: 'No',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  DIAGNOSIS_1_1: [
    {
      type: 'quickReplies',
      text: 'Is the casualty showing signs of shallow breathing',
      replies: [
        {
          title: 'Yes',
          payload: 'DIAGNOSIS_1_2',
        },
        {
          title: 'No',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  DIAGNOSIS_1_2: [
    {
      type: 'text',
      text: 'This could be signs of shock, I will send you instructions on to help the situation.',
      waitFor: 1,
    },
    {
      type: 'quickReplies',
      text: 'Do you see a reason they are in shock? You should treat that first.',
      replies: [
        {
          title: 'How?',
          payload: 'HELP_SOMEONE',
        },
        {
          title: 'Okay, Done!',
          payload: 'DIAGNOSIS_1_2_1',
        },
        {
          title: 'No longer need help',
          payload: 'MENU',
        },
      ],
    },
  ],
  DIAGNOSIS_1_2_1: [
    {
      type: 'text',
      text: 'Lay casualty down on flat surface',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Raise legs,eEnsure legs are above the level of the heart',
      waitFor: 1,
    },
    {
      type: 'image',
      url:
        'https://www.portsmouth.co.uk/images-o.jpimedia.uk/imagefetch/http://www.portsmouth.co.uk/webimage/Prestige.Item.1.84790014!image/image.jpg?width=640',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Keep casualty warm, wrap in a blanket and loosen tight clothing',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'Ensure they are still breathing and airways are clear',
      waitFor: 1,
    },
    {
      type: 'text',
      text: 'DO NOT allow food or drink, this could induce vomiting!',
      waitFor: 1,
    },
    {
      type: 'quickReplies',
      text: 'Call for an ambulance',
      replies: [
        {
          title: 'How?',
          payload: 'EM_NUMBER',
        },
        {
          title: 'Okay, Thanks!',
          payload: 'MENU',
        },
      ],
    },
  ],
};
