console.log("Assignment:plz make sure to write Function for each step");

console.log(">>>>>>Number is Even or Odd using function>>>>>>");

function isEvenOrOdd(arg1) {
  if (arg1 % 2 == 0) {
    console.log(`Number is Even :- ${arg1}`);
  } else {
    console.log(`Number is Odd:-  ${arg1}`);
  }
}
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log(">>>>>person is eligible or not useing function>>>>>");

function isEligibleOrNot(arg1) {
  if (arg1 >= 18) {
    console.log(`You are eligible for Voting:-   ${arg1}`);
  } else {
    console.log(`You are not eligible for Voting:-   ${arg1}`);
  }
}
isEligibleOrNot(20);
isEligibleOrNot(17);
isEligibleOrNot(18);
isEligibleOrNot(40);

console.log(">>>>>>Check String Contains more than 10 char  or Not>>>>>>>");

function moreOrNot(arg1) {
  var result = arg1.length;
  if (result >= 10) {
    console.log(`String Contains More than 10....${arg1}`);
  } else {
    console.log(`String Contains Not more than 10....${arg1}`);
  }
}
moreOrNot("JavaScript-ES6");
moreOrNot("Anushil");

console.log(">>>>>>>Using Function Expression>>>>>>");

var isEvanOrOdd = function (arg1) {
  if (arg1 % 2 == 0) {
    console.log(`Number is Even:-  ${arg1}`);
  } else {
    console.log(`Number is Odd:-  ${arg1}`);
  }
};
isEvenOrOdd(2022);
isEvenOrOdd(123);

console.log(">>>>>>>Using Function Expression>>>>>>>");

var isStartWith = function (arg1) {
  var result = arg1.startsWith("Java");
  if (result == true)
   console.log(result + " String starts with java");
  else console.log(result + " String is not starts with java ");
}
isStartWith("JavaScript Language");
isStartWith("Anushil");
isStartWith("Java Language");
