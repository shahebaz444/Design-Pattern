import { Editor } from './Editor';

export class TextEditor implements Editor {
  read(): string {
    return 'read the Text';
  }
}
