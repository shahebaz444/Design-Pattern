import { GraphicTool, Tool, getInstance } from './PrototypeFactory';

let tool: Tool = new GraphicTool(getInstance());

console.log(`Tool in use: ${tool.getGraphic().getInfo()}`);
