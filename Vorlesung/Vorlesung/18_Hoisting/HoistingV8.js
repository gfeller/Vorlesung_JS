"use strict";
let x = 'a';
(function() {
    console.log(x);
    let x = 'b';
}());