import { TextEditor } from './TextEditor';
import { MusicEditor } from './MusicEditor';
import { PaintEditor } from './PaintEditor';

export abstract class Editor {
  abstract read(): string;
  static getInstance(): Editor {
    return new PaintEditor();
  }
}

class Base {}

export class Derived extends Base {}

interface MustOveerride {
  done(base: Base): void;
}

export class Overrider implements MustOveerride {
  done(base: Derived): void {}
}
