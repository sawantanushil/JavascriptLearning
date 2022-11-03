console.log(`Count the total number vowels using includes() for string-->"Good Morning IT Champ"`);
var str="Good Morning IT Champ";
var vowelsLower="aeiou";
var vowelsUpper="AEIOU";
var vowelCount=0;

var strLowerCase=str.toLowerCase();
for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);
    isValueLower=vowelsLower.includes(char);
    isValueUpper=vowelsUpper.includes(char);
  //  console.log(char,isValue);
    if (isValueLower || isValueUpper) {
        vowelCount=vowelCount+1;
        
    }
    
    
}
console.log(`Total Vowels Count is ${vowelCount}`);

console.log("_______________________________________");
function evenPositionedChar(str) {
  for (let index = 0; index < str.length; index++) {
    var ch=str.charAt(index);
    
    if (index%2==0 && ch!=" ") {
    console.log(ch);
      
    }
    
  }

  
}
evenPositionedChar("Hard work always pays back");