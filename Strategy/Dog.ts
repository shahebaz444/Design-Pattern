import { Animal } from './Animal';
import { DoesNotFly } from './Flys';

export class Dog extends Animal {
  constructor() {
    super();
    this.setFlys(new DoesNotFly());
  }
}
