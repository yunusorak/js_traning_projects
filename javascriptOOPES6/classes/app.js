// Syntactic Sugar -- Sözdizimsel şeker

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// };
// Employee.prototype.showInfos = function() {
//     console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary)
// }

// const emp = new Employee("Mustafa", 25, 4000)
// console.log(emp)


// ------ ÜSTTEKİNİ ECMASCRIP6 İLE YAZMA

class Employee {

    // "constructor" Özel bir method obje oluştuğunda bu method direkt javascript tarafından çağırılarak çalışacak
    constructor(name, age, salary) { // Constructor auto gelir çalışır hemen
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
        // Buraya yazdığımız fonksiyon otomatik olarak prototype'ına eklenir
    showInfos() {
        console.log("İsim : " + this.name + ", Yaş : " + this.age + ", Maaş : " + this.salary)
    }


}


// Obje oluşturma-çağırma aynı yani

const emp = new Employee("Mustafa", 25, 4000);
// console.log(emp)
emp.showInfos()