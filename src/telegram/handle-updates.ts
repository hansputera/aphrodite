import type { Update } from '@grammyjs/types';
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
  return new Response('Received!');
};
