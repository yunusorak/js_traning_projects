// Statik Methotlar

class Math {
    square(x) {
        console.log(x * x)
    }

    // aşağıdaki gibi static yazarsak obje oluşturmadan kullanabiliriz
    static cube(x) {
        console.log(x * x * x)
    }
}
// Statik durağan bir metot şeklinde yazdığımız için obje oluşturmadan çalıştırırız

Math.cube(2);
// --- Statik olduğu için objeye atıp çağırılamaz bir üst satırdaki gibi olmalı
// const math = new Math();
// console.log(math)
// math.cube(2)


const math = new Math()
math.square(9)

// -----Static olarka yazılmadığı için aşağıdaki kullanım hatalıdır
// Math.sqrt(2)

// const math = new Math()
// math.cube(3)
// console.log(math)



// Object.create() ----->>>> Object'in içine create Static olarak yazılmış