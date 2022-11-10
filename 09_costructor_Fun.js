 function Person(name, age, city,gender) {
     this.name = name;
     this.age = age;
     this.city = city;
this.gender=gender;

 }
 Person.prototype.country="India";
 let p1 = new Person("Anushil", 29, "Sangola","Male");
 let p2 = new Person("Aarti", 26, "Sangola","Female");
 console.log(p1.country);
 console.log(p2.country);