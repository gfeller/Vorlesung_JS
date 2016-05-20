var foo
var bar
var baz = function(data) {
    return data +  1
}
bar = 1
foo = bar + baz
(bar + bar) + baz(bar)

console.log(foo)


var foo;
var bar;
var baz = function(data)
{
    return data +  1;
};
bar = 1;
foo = bar + baz(bar + bar) + baz(bar);
