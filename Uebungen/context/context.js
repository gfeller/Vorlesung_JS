counter = 999;
const object = {
    counter: 3,
    foo: function () {
        console.log(this.counter)
    }
};
const object2 = {counter: 100};
const foo = object.foo;

object.foo();
foo();
foo.apply({counter: 10});

object2.foo = foo;
object2.foo();

const newFoo = foo.bind({counter: 11});
newFoo();
newFoo.apply({counter: 12});

//advanced
new foo();
new newFoo();

