import { Editor, Overrider, Derived } from './Editor';

let editor = Editor.getInstance();

let o = new Overrider();

console.log(editor.read());

o.done(new Derived());
