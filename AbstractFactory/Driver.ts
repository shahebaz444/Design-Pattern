import { Client } from './Client';
import { AbstractMazeFactory } from './AbstractMazeFactory/AbstractMazeFactory';

let maze = new Client(AbstractMazeFactory.getInstance());
