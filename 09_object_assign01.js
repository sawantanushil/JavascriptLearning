let teacher = {
  fullName: "Gajanan",
  Dept: "IT dept",
  Subject: "JavaScript",
  degrees: {
    degrees1: "PHD",
    degress2: "CSC",
    degress3: "Adv Computing",
  },
  certificate:{
    No1:"Computer",
    No2:"Hacker Rank"
  }
  
}
console.log("_____________In Operator True__________________");
let isAvailable="Dept" in teacher;
console.log(isAvailable);
console.log(Object.entries(teacher));
console.log("______________In Operator False____________________");
let isAvailableNot="city" in teacher;
console.log(isAvailableNot);

//console.log(Object.keys(teacher));
//console.log(Object.values(teacher));
//console.log(Object.entries(teacher.degrees));
//console.log(Object.entries(teacher.degrees.certificate));
//teacher.degrees.certificate.No3="IFE Courses";
teacher.fullName="Gajanan Kharat";
console.table(teacher.degrees);
console.table(teacher);
console.table(teacher.certificate);
//delete teacher.degrees.certificate.No2;

