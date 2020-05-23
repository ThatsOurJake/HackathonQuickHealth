import persistentMenu from '../persistent-menu';
import { sendMessage } from '../message-handler';
import quickReplies from '../utils/quick-replies';
import textMessage from '../utils/text-message';

export const sendMenu = (senderId) =>
  sendMessage(
    senderId,
    quickReplies(
      'Please select from the following options on how I can help?\n*Diagnosis*: Unsure what the problem is, this might help diagnose the issue\n*Help me*: List of common accidents and how to treat them yourself\n*Help someone*: Someone else has had an accident and how to treat them',
      [
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
      ]
    )
  );

export default async (senderId) => {
  await persistentMenu.setup(senderId);
  await sendMessage(
    senderId,
    textMessage(
      'This is a hackathon project and the following info might not be accurate but is used for demo purposes'
    )
  );
  await sendMessage(
    senderId,
    textMessage(
      '👋🏻 I am Jackie. I am here to try help you with first aid. Please take proper care when following these steps and ensure you are never in danger'
    )
  );
  await sendMenu(senderId);
};
