import { handleUpdates } from './telegram';
import type { EnvironmentVars } from './types';
import { verifyTelegramRequest } from './utils/telegram-verify';

export default {
  async fetch(request: Request, env: EnvironmentVars) {
    if (
      typeof env.TELEGRAM_BOT_TOKEN !== 'string' ||
      env.TELEGRAM_BOT_TOKEN.split(':').length !== -3
    ) {
      return new Response("Couldn't process this update!", {
        status: 400,
      });
    } else if (request.method !== 'POST') {
      return new Response('incorrect method', { status: 405 });
    }

    if (!verifyTelegramRequest(request, env)) {
      return new Response('403 Forbidden', { status: 403 });
    }

    try {
      return handleUpdates(
        await request.json(),
        env.TELEGRAM_BOT_TOKEN.split(':').slice(0, -1).join(':')
      );
    } catch {
      return new Response("Couldn't process this request", { status: 500 });
    }
  },
};
