import journeyFactory from '../journey-factory';

import visibleWound from './visible-wound';
import anaShock from './ana-shock';
import heartAttack from './heart-attack';

const steps = {
  DIAGNOSIS: [
    {
      type: 'quickReplies',
      text: 'What might the causality or yourself be showing?',
      replies: [
        {
          title: 'Visible wound',
          payload: 'DIAGNOSIS_1',
        },
        {
          title: 'Swelling: mouth, tongue, face, neck',
          payload: 'DIAGNOSIS_2',
        },
        {
          title: 'Tightness / Pain in chest',
          payload: 'DIAGNOSIS_3',
        },
        {
          title: 'None of the above',
          payload: 'EM_NUMBER',
        },
      ],
    },
  ],
  ...visibleWound,
  ...anaShock,
  ...heartAttack,
};

export default journeyFactory(steps);
