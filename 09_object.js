let objectName={
    full_name:"Anushil Sawant",
    age:31,
    ismarried:true,
    address: {
        Room_No:401,
        Building_Name:"Titanium One",
        Sec:23,
        Plot_No:40,
        State:"Maharashtra"
    },
    eat :function(){
         console.log("I am Vegitraine");       
    },
    details:function() {
        let personalDetails=`details are: ${this.full_name},${this.age},${this.address.Building_Name}`;
        return personalDetails;
    }
    
}
let pdetails=objectName.details();
console.log(pdetails);
console.table(objectName.address);
objectName.pincode=410206; //add properties
console.table(objectName);
objectName.profession="Angular Devloper";
objectName.full_name="Anushil Baburao Sawant";
objectName.eat();
//console.table(objectName);
//console.table(objectName);
delete objectName.age;
//console.table(objectName);
let result=objectName.full_name;
console.log(result);
console.log("___________");
console.log(objectName.full_name);
//console.log(objectName.age);
