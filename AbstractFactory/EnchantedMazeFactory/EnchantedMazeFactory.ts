import { AbstractMazeFactory } from '../AbstractMazeFactory/AbstractMazeFactory';
import { AbstractDoor } from '../AbstractMazeFactory/AbstractDoor';
import { AbstractWall } from '../AbstractMazeFactory/AbstractWall';
import { AbstractRoom } from '../AbstractMazeFactory/AbstractRoom';
import { EnchantedDoor } from './EnchantedDoor';
import { EnchantedWall } from './EnchantedWall';
import { EnchantedRoom } from './EnchantedRoom';

export class EnchantedMazeFactory extends AbstractMazeFactory {
  getDoor(): AbstractDoor {
    return new EnchantedDoor();
  }
  getWall(): AbstractWall {
    return new EnchantedWall();
  }
  getRoom(): AbstractRoom {
    return new EnchantedRoom();
  }
}
