function checker(value) {
    if (value) {
        console.log(value)
    } else {
        console.log("nothing")
    }
}

checker({"name": "michael"});
checker("0" && "1");
checker(0);
