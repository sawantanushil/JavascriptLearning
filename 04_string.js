console.log(">>>>>Concat()>>>>>");
var fname="Virat";
var lname="Kohli";
var result= fname.concat(" ",lname);
console.log(result);
console.log(">>>>>replace()>>>>>");
var greet="Good Morning boys and girls";
console.log(greet);
console.log(">>>>> After repalace>>>>>");
var result=greet.replace("Morning","Evening");
console.log(result);

 console.log(">>>>>toUpercase>>>>");
 console.log(result.toUpperCase());

 console.log(">>>>>toLowercase>>>>");
 console.log(result.toLowerCase());

 console.log(">>>>>Trim()>>>>");
var greet="     Good Morning boys and girls    ";
console.log(greet.length);
var result=greet.trim();
console.log(result.length);

console.log(">>>>>Includes()>>>>");
var greet="Good Morning boys and girls";
var result=greet.includes("boys");
console.log(result);

console.log(">>>>>Substring()>>>>");
var greet="Good Morning boys and girls";
console.log(greet.substring(5,));
console.log(greet.substring(9,30));


console.log(">>>>>Slice()>>>>");
var greet="Good Morning boys and girls";
console.log(greet.slice(9,30));

console.log(">>>>>Split()>>>>");
var studentlist="anil,sunil,anushil,amar,sanjay";
var splitResult=studentlist.split(",");
console.log(splitResult);

var impQuote=`"Do or Die" this attitude is importat for this training`;
console.log(impQuote);

var fname="virat";
var lname="Kholi";
console.log(`First Name:${fname} and Last Name:${lname}`); // back tike(`)






