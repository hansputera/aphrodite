import type { Message, Update } from '@grammyjs/types';
import { messageHandlerFunc } from '../handlers';
import { TelegramClient } from './client';

export const handleUpdates = async (
  update: Update,
  token: string
): Promise<Response> => {
  if (!update.update_id) {
    return new Response('Missing update_id', { status: 400 });
  }
  const client = new TelegramClient();
  client.token = token;

  // update message handler
  if (update.message || update.edited_message) {
    messageHandlerFunc(
      client,
      !!update.edited_message ? 'edit' : 'new',
      (update.message || update.edited_message) as Message
    );
  }

  return new Response('everything is ok');
};
