counter = 999;
var object = { counter:3 , foo : function(){ console.log( this.counter )}};
var object2 = {counter : 100};
var foo = object.foo;

object.foo();
foo();
foo.apply({counter : 10});

object2.foo = foo;
object2.foo();

var newFoo = foo.bind({counter : 11});
newFoo();
newFoo.apply({counter : 12});

//advanced
new foo();
new newFoo();

