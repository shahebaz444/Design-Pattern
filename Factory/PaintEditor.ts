import { Editor } from './Editor';

export class PaintEditor implements Editor {
  read(): string {
    return 'read the Paint';
  }
}
