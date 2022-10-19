var wordLenghtSquare = function (word) {
    var arg1 = word.length;
    var result = arg1 * arg1;
    return result;
}
console.log(wordLenghtSquare("JavaScript"));
console.log(wordLenghtSquare("Google"));
console.log(wordLenghtSquare("Developer"));

console.log(`">>>>>> I am Angular Developer>>>>>>"`);
var result="I am Angular Developer";
var lenis = result.length;
console.log(`String Length is:- ${lenis}`);
 var result1=result.split(" ");
 console.log(result1);
 var final_result = result1.length;

 console.log(`String Length and Divide is:-   ${lenis/final_result}`);
 console.log(`String Length and Multi is:-   ${lenis*final_result}`);


