import type { EnvironmentVars } from '../types';
import { atArray } from './at-array';

export const verifyTelegramRequest = (
  request: Request,
  env: EnvironmentVars
): boolean => {
  return (
    request.headers.get('X-Telegram-Bot-Api-Secret-Token') ===
    atArray(env.TELEGRAM_BOT_TOKEN.split(':'), -1)
  );
};
