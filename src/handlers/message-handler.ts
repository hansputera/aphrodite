import type { Message } from '@grammyjs/types';
import type { MessageHandlerType } from '../types';
import type { TelegramClient } from '../telegram/client';

export const messageHandlerFunc = async (
  client: TelegramClient,
  type: MessageHandlerType,
  message: Message
) => {
  if (type === 'new') {
    console.log('new message from', message.chat.id);
    if (
      message.text?.toLowerCase() === 'hello bot' &&
      message.chat.type === 'private'
    ) {
      await client.send('sendMessage', {
        chat_id: message.chat.id,
        text: 'Hello!',
        reply_to_message_id: message.message_id,
      });
    }
  }
};
