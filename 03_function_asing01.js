console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function show() {
    console.log("Hello World");
    console.log("Welcome to JavaScript");
}
show();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function N_concat(firstName, lastName) {
    console.log(firstName + lastName);

}
N_concat("Anushil ", "Sawant");
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>");

function swap_value(arg1, arg2) {
   console.log(">>>>>>Before Swapping>>>>>>>");
   console.log(arg1,arg2);
   console.log(">>>>>>After Swapping>>>>>>>>");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1,arg2);
}
swap_value("Virat", "Anushka");
swap_value(1000, 2000);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");

function add_three_number(arg1,arg2,arg3) {
    console.log(arg1 + arg2+arg3);
}
add_three_number(10.23,600,40);
add_three_number("hello ","Good ","Morning");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");

