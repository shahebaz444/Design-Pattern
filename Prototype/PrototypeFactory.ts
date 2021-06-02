/**
 * A general framework for graphical editor
 * @Author Suhas Krishna Srivastava
 */

interface Cloneable {
  clone(): Cloneable;
}

export function getInstance(): Graphic {
  return new MusicalNote();
}

export class Graphic implements Cloneable {
  clone(): Cloneable {
    return this;
  }

  getInfo(): String {
    return 'Graphic';
  }
}

export abstract class Tool {
  abstract getGraphic(): Graphic;
}

export class GraphicTool extends Tool {
  constructor(private _prototype: Graphic) {
    super();
  }

  getGraphic(): Graphic {
    return this._prototype;
  }
}

export class MusicalNote extends Graphic {
  getInfo(): String {
    return 'MusicalNote';
  }
}

export class Pixel extends Graphic {
  getInfo(): String {
    return 'Pixel';
  }
}
