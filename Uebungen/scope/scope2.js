var alphabet = ["A", "B", "C", "D", "E"];

function getIndexOf(value) {
    for (i = 0; i < alphabet.length; i++) {
        if(value == alphabet[i]) {
            return i;
        }
    }
}
function getIndexOfElements(toMap)
{
    result = new Array(toMap.length);
    for (i = 0; i < toMap.length; i++) {
        result[i] =  getIndexOf(toMap[i]);
    }
    return result;
}

console.log(getIndexOfElements(["A", "B", "E"])); //A: works
//console.log(getIndexOfElements(["A", "A", "B"])); //B: does not work