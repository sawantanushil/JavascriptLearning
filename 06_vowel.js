var givenString = "I love Javascript";
var strlowerCase=givenString.toLocaleUpperCase();
stringLength = givenString.length;
for (let index = 0; index < stringLength; index++) {
    var result = givenString.charAt(index);
    console.log(result);
} 
for (let index = 0; index < stringLength; index++) {
    var char = strlowerCase.charAt(index);
    if (
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u" ||
        
    ) {
        console.log(char);
    }
}

console.log("<<<<<<<<<<NOt VOwels Charateros>>>>>>>>>");
for (let index = 0; index < stringLength; index++) {
    var char = givenString.charAt(index);
    if (
        char != "a" ||
        char != "e" ||
        char != "i" ||
        char != "o" ||
        char != "u" ||
        char != "I"
    ) {
        console.log(char);
    }
}
