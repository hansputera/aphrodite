import type { MessageEntity } from '@grammyjs/types';
import type { TextParsed } from '../types';
import { unsetProp } from './unset-prop';

export const textParse = (
  text: string,
  entities: MessageEntity[]
): TextParsed[] =>
  entities.map((entity) => ({
    ...unsetProp(entity, 'type', 'offset', 'length'),
    text: text.slice(entity.offset, entity.length),
    type: entity.type,
  }));
