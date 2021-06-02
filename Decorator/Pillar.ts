export interface IPillar {
  addElement(): string;
}

export abstract class Pillar implements IPillar {
  abstract addElement(): string;

  pillar: IPillar;
  constructor(pillar: IPillar) {
    this.pillar = pillar;
  }
}

export class SimpleClass extends Pillar {
  addElement(): string {
    return '';
  }
}

export class Cement extends Pillar {
  addElement(): string {
    return 'Cement ' + this.pillar.addElement();
  }
}

export class Rod extends Pillar {
  addElement(): string {
    return 'Rod ' + this.pillar.addElement();
  }
}

export class Stones extends Pillar {
  addElement(): string {
    return 'Stones ' + this.pillar.addElement();
  }
}

let ipman: IPillar = new Rod(new Stones(new Cement(new Stones(new SimpleClass(null)))));

console.log(ipman.addElement());
