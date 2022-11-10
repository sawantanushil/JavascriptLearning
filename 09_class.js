class Person {
    constructor(full_name, city, age, gender) {
        this.full_name = full_name;
        this.city = city;
        this.age = age;
        this.gender = gender;
    }
}
let p = new Person("Anushil", "Navi Mumbai", 31, "Male");
let a = new Person("Aarti", "Navi Mumbai", 24, "Female");
console.log(p);
console.log(a);

console.log("___________for practice___________");
class person1 {
    constructor(S_name, Sroll_no, S_class, S_Contact) {
        this.S_name = S_name;
        this.Sroll_no = Sroll_no;
        this.S_class = S_class;
        this.S_Contact = S_Contact;
    }
}
let student = new person1("Anushil", 09, "BCA", 9699000101);
console.log(student);