import { ApiResponse } from '@grammyjs/types';

/**
 * @class TelegramClient
 */
export class TelegramClient {
  #token = '';

  /**
   * Get telegram bot api url
   * @param method Telegram API method
   * @return {string} Full Telegram Bot API
   */
  getAppliedUrl(method: string, queries?: Record<string, string>): string {
    const url = new URL(
      `./bot${this.#token}/${method.replace(/\s+/g, '')}`,
      'https://api.telegram.org'
    );

    if (queries) url.search = new URLSearchParams(queries).toString();

    return url.href;
  }
  set token(value: string) {
    this.#token = value;
    return;
  }

  async send<ExpectedResponse>(
    methodTg: string,
    payload: Record<string, unknown>,
    methodHttp?: string
  ): Promise<ApiResponse<ExpectedResponse> | undefined> {
    try {
      const response = await fetch(
        this.getAppliedUrl(
          methodTg,
          !!payload && (payload as Record<string, string>)
        ),
        {
          method: methodHttp || 'POST',
          body: JSON.stringify(payload),
        }
      );

      return response.json<ApiResponse<ExpectedResponse>>();
    } catch {
      return undefined;
    }
  }
}
