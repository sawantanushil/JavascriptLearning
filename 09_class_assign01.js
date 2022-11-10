console.log("_______Vehical Details by using class and constructor_____________");

class Vehical {
  constructor(Vehical_Name, Wheels, Engine) {
    this.Vehical_Name = Vehical_Name;
    this.Wheels = Wheels;
    this.Engine = Engine;
  }
}
let v = new Vehical("Skoda", "4-wheeler", "Diesel Engine");
let v1 = new Vehical("KTM", "2-wheeler", "Petrol Engine");
let v2 = new Vehical("Fezzer", "2-wheeler", "Petrol Engine");
let v3 = new Vehical("Swift", "4-wheeler", "Petrol Engine");
console.log(v);
console.log(v1);
console.log(v2);
console.log(v3);

console.log("_______College Details by using class and constructor_____________");

class College{
    constructor(C_name,E_since,Grade){
this.C_name=C_name;
this.E_since=E_since;
this.Grade=Grade;
    }
}
let c=new College("Sangola College,Sangola",1948,"A++");
let c1=new College("shevri College,Pandharpur",1950,"A+");
let c2=new College("Atpadi College,Atpadi" ,1990,"A");
console.log(c);
console.log(c1);
console.log(c2);

console.log("___________Fabonacci Serise___________");

let count=7;
fabonaccies=1;
if (count<=1) {
    fabonaccies=fabonaccies*count;


    console.log(`"Total Fabonaccies is :" ${fabonaccies}`);
    count++;
}


