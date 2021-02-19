import {a, incA} from "./export.mjs"
import {a as tmpA, incA as tmpIncA} from "./export.mjs"
import defaultExport from "./export.mjs"
import * as exportLib from "./export.mjs"

console.log(a);
incA();
console.log(tmpA);
tmpIncA();
console.log(defaultExport.a);
defaultExport.incA();
console.log(exportLib.a);
exportLib.incA();

console.log(a);
