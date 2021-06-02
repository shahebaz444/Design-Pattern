import { Flys } from './Flys';

export abstract class Animal {
  flys: Flys;

  setFlys(flys: Flys) {
    this.flys = flys;
  }
}
