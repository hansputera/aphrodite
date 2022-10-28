import type { MessageEntity } from '@grammyjs/types';

export type TextParsed = {
  text: string;
  type: MessageEntity['type'];
  url?: string;
  lang?: string;
  emojiId?: string;
};
