function say(text, count) {
    count = count || 1;
    var output = "";
    for (var i = 0; i < count; ++i) {
        output += " " + text;
    }
    console.log("I say " + output);
}


say("hi");
say("hi", 3);