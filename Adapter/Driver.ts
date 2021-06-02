export interface IPaint {
  dragNdrop(): string;
}

function getInstance(): IPaint {
  return new Word();
}

export class Paint implements IPaint {
  dragNdrop(): string {
    return 'Dropped';
  }
}

export class Word implements IPaint {
  dragNdrop(): string {
    return 'Word';
  }
}
export interface OS {
  dragNdrop(): string;
}

export class Adapter implements OS {
  private paint: IPaint = getInstance();
  dragNdrop(): string {
    return this.paint.dragNdrop();
  }
}

// Client code (must not be changed)
let os = new Adapter();
console.log(os.dragNdrop());
