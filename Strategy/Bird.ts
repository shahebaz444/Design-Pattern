import { Animal } from './Animal';
import { DoesFly } from './Flys';

export class Bird extends Animal {
  constructor() {
    super();
    this.setFlys(new DoesFly());
  }
}
