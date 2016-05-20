function a() {
    let a = 1;
}

function c() {
    'use strict';

    function b() {
        let b = 1;
    }
    b();
    a();
}
c();

