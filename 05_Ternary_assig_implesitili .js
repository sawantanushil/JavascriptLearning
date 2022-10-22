console.log(0 == '');
console.log(0 == '0');
console.log(0 == false);
console.log(null == undefined);
console.log(1 == [1]);
console.log(1 == true);
console.log(1 == '1');

var a = 100;
var b = 101;
var c = 199;
var result = a > b && a > c ? "A is Greater than B and C" : "B is Grater than A and C";
console.log(result);

var myNumber = 101;
if (myNumber >=0) {
    console.log("Positive");


if (myNumber % 2 == 0) {
   console.log("Even");
}
else{
    console.log("Odd");
}

} else {
    console.log("Negative");
}