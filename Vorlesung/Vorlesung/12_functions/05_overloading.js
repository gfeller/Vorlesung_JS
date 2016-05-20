function say(text, count) {
    var output = "";
    for (var i = 0; i < count; ++i) {
        output += " " + text;
    }
    console.log("I say " + output);
}

function say(text) {
    console.log("I say " + text);
}

say("hi");
say("hi", 3);