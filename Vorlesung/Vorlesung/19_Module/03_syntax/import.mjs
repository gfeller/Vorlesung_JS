import {a, incA} from "./export.mjs"
import {a as tmpA, incA as tmpIncA} from "./export.mjs"
import defaultExport from "./export.mjs"
import * as exportLib from "./export.mjs"

console.log( a);

incA();
console.log( a);

tmpIncA();
console.log( tmpA);

defaultExport.incA();
console.log(exportLib.a);

exportLib.incA();
console.log(a);

// default export is part of namespace
console.log(exportLib);
