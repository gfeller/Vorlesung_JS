function testErrors(){
    try {
        function test() {
            error();
        }

        test();
    }
    catch(e){
        console.log(e.stack);
    }

    try {
        (function(){
            error();
        })();
    }
    catch(e){
        console.log(e.stack);
    }

    try {
        var test = function(){
            error();
        };
        test();
    }
    catch(e){
        console.log(e.stack);
    }
}
testErrors();