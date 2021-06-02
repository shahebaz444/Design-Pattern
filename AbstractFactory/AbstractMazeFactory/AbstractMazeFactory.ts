import { AbstractDoor } from './AbstractDoor';
import { AbstractWall } from './AbstractWall';
import { AbstractRoom } from './AbstractRoom';
import { EnchantedMazeFactory } from '../EnchantedMazeFactory/EnchantedMazeFactory';

export abstract class AbstractMazeFactory {
  abstract getDoor(): AbstractDoor;
  abstract getWall(): AbstractWall;
  abstract getRoom(): AbstractRoom;

  static getInstance(): AbstractMazeFactory {
    return new EnchantedMazeFactory();
  }
}
