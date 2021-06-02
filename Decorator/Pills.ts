export interface IPillar {
  element: string;
  addElement(): string;
}

export class Pillar implements IPillar {
  pillar: IPillar;

  constructor(pillar: IPillar) {
    this.pillar = pillar;
  }
  element: string = this.constructor.toString().match(/\w+/g)[1];
  addElement(): string {
    return this.element + ' ' + this.pillar.addElement(); //Don't Repeat Yourself
  }
}

export class SimpleClass extends Pillar {
  element: string = ' ';

  addElement(): string {
    return ' '; //overridden this to avoid accessing null object
  }
}

export class Cement extends Pillar {}

export class Rod extends Pillar {}

export class Stones extends Pillar {}

let ipman: IPillar = new Rod(new Stones(new Cement(new Stones(new SimpleClass(null)))));

console.log(ipman.addElement());
