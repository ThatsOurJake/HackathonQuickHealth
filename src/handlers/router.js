import diagnosisJourney from '../journeys/diagnosis';
import emergencyJourney from '../journeys/emergency-number';

import { sendMenu } from './get-started';

export default (senderId, route) => {
  if (route.startsWith('DIAGNOSIS')) {
    diagnosisJourney(senderId, route);
  } else if (route.startsWith('HELP_ME')) {
  } else if (route.startsWith('HELP_SOMEONE')) {
  } else if (route === 'MENU') {
    sendMenu(senderId);
  } else if (route === 'EM_NUMBER') {
    emergencyJourney(senderId, route);
  } else {
    console.error(`UNKNOWN ROUTE: ${route}`);
  }
};
