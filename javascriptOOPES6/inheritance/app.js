class Person { // SuperClass, BaseClass - Yani bir üst class
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    showInfos() {
        console.log("SubClass -- İsim : " + this.name + ", Yaş : " + this.age + " Maaş : " + this.salary)
    }
}
// Kalıtım yapacağımız için " extends " anahtar kelimesini kullanıyoruz
// Böylece Person'ın tüm methodları bize geliyor
class Employee extends Person { // DerivedClass, SubClass, ChildClass -- yani bir alt class çünkü türedi
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        // super() anahtar kelimesi bir üst sınıfın constructor'ını kullanmak istediğimizi söyler
        super(name, age); // böyle sadece constructor'ını kulalnıyoruz diğer bir örnek super.showInfos()
        this.salary = salary;


    };
    // Overridding yapma
    showInfos() {
        console.log("SubClass -- İsim : " + this.name + ", Yaş : " + this.age + " Maaş : " + this.salary)
    }
    toString() { // Overridding yapma
        console.log("Employee - toString");
    }

    raiseSalary(amount) { // Ekstra Metot
        this.salary += amount
        console.log(this.salary)
    }
}

const emp = new Employee("Mustafa", 25, 4000);
emp.showInfos();
emp.toString();
emp.raiseSalary(500);
// emp.showInfos()







// -------->>>>>>>> Alttakini ES6 ile üstte yapıyoruz

// Inheritance - Kalıtım,

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }

// Person.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + ", Yaş : " + this.age)
// };
// const person = new Person("Mustafa", 25)
// console.log(person)

// function Employee(name, age, salary) {
// this.name = name;
// this.age = age;
//     Person.call(this, name, age); // buradaki this'in yerine Employee geçer
//     this.salary = salary;
// }



// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.toString = function() {
//     console.log("DENEME Employee")
// };
// Overridding - İptal Etme
// Employee.prototype.showInfos = function() {
//     console.log("İsim : " + this.name + ", Yaş : " + this.age + ", Maaş : " + this.salary)
// }
// const emp = new Employee("Mustafa", 25, 295825);
// console.log(emp)

// emp.showInfos()
// emp.toString()

// console.log(emp)