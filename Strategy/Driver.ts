import { Dog } from './Dog';
import { DoesFly } from './Flys';

let dog = new Dog();

console.log(dog.flys.canFly());

dog.setFlys(new DoesFly());

console.log(dog.flys.canFly());
