import diagnosisJourney from '../journeys/diagnosis';
import emergencyJourney from '../journeys/emergency-number';
import helpSomeoneJourney from '../journeys/help-someone';
import helpSelfJourney from '../journeys/self-help';

import { sendMenu } from './get-started';

export default (senderId, route) => {
  if (route.startsWith('DIAGNOSIS')) {
    diagnosisJourney(senderId, route);
  } else if (route.startsWith('HELP_SELF')) {
    helpSelfJourney(senderId, route);
  } else if (route.startsWith('HELP_SOMEONE')) {
    helpSomeoneJourney(senderId, route);
  } else if (route === 'MENU') {
    sendMenu(senderId);
  } else if (route === 'EM_NUMBER') {
    emergencyJourney(senderId, route);
  } else {
    console.error(`UNKNOWN ROUTE: ${route}`);
  }
};
