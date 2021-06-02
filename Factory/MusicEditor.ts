import { Editor } from './Editor';

export class MusicEditor implements Editor {
  read(): string {
    return 'read the Music';
  }
}
