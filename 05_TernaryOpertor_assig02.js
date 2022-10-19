var ternary = function (arg1, arg2) {
    var result = arg1 > arg2 ? arg1 : arg2;
    console.log(result);

}
ternary(10, -10);
ternary(800, 899);

console.log(">>>>>check number is Even Or Odd");

var isEvenOrOdd = function (arg1) {
    var result = arg1 % 2 == 0 ? true : false;
    console.log(result);

}
isEvenOrOdd(29)
isEvenOrOdd(44)
isEvenOrOdd(0)
isEvenOrOdd(101)

console.log(`">>>>>>String is Even or Odd>>>>>"`);
var evenOrOdd = function (arg1) {
    var result = arg1.length;
    console.log(result);
    var result1 = result % 2 == 0 ? true : false;
    console.log(result1);


}
evenOrOdd("JavaScript");
evenOrOdd("Google");
evenOrOdd("Developer");