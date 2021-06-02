import { AbstractWall } from './AbstractMazeFactory/AbstractWall';
import { AbstractDoor } from './AbstractMazeFactory/AbstractDoor';
import { AbstractRoom } from './AbstractMazeFactory/AbstractRoom';
import { AbstractMazeFactory } from './AbstractMazeFactory/AbstractMazeFactory';

export class Client {
  private abstractWall: AbstractWall;
  private abstractDoor: AbstractDoor;
  private abstractRoom: AbstractRoom;

  constructor(private abstractMazeFactory: AbstractMazeFactory) {
    this.abstractWall = abstractMazeFactory.getWall();
    this.abstractDoor = abstractMazeFactory.getDoor();
    this.abstractRoom = abstractMazeFactory.getRoom();
  }
}
