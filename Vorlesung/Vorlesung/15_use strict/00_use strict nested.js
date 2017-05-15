function a() {
    a1 = 1;  //mit 'use strict': ReferenceError: x is not defined
}

function c() {
    'use strict';

    function b() {
        b1 = 1; //error
    }
    b();
    a();
}
c();