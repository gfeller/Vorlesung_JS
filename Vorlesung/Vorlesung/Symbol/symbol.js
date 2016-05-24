var symbol1 = Symbol("symbol1");
var symbol2 = Symbol("symbol1");
console.log(1, symbol1 == symbol2);

function createLogin(pin, name){
    var pinProp = Symbol("pin");
    return {
        [pinProp] : pin,
        name,
        login : function(pin){
            return this[pinProp] == pin;
        }}
}

var token = createLogin("1234", "Michael");
console.log(2, token.login("1111"));
console.log(3, token.login("1234"));
console.log(4, token);
console.log(5, token.login(token["pin"]));
console.log(6, token.login(token[Object.getOwnPropertySymbols(token)[0]]));




