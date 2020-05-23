import persistentMenu from '../persistent-menu';
import { sendMessage } from '../message-handler';
import quickReplies from '../utils/quick-replies';

export default async (senderId) => {
  await persistentMenu.setup(senderId);
  await sendMessage(
    senderId,
    quickReplies('Please select from the following options on how I can help?', [
      {
        title: 'Diagnosis',
        payload: 'DIAGNOSIS',
      },
      {
        title: 'Help me',
        payload: 'HELP_ME',
      },
      {
        title: 'Help someone',
        payload: 'HELP_SOMEONE',
      },
    ])
  );
};
