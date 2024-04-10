 // Fonksyion Tanımlama

 // function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
 // if (typeof(name) == "undefined") name = "Bilgi Yok"
 // if (typeof(age) == "undefined") age = "Bilgi Yok"
 //     console.log(`İsim : ${name}, 
 // Yaş : ${age}`)
 // }
 // merhaba("Murat", 25) // Fonksiyon Çağrısı (Function Call)
 // merhaba("Ayşe", 30)

 // merhaba()





 //RETURN


 //  function square(x) {
 //      return x * x
 //  }

 //  function cube(x) {
 //      return x * x * x
 //  }
 //  let a = cube(square(12))

 //  console.log(a)



 //  function merhaba() {
 //      return "Merhaba";
 //  }

 //  console.log(merhaba())

 // Function Expression

 //  const merhaba = function(name) {
 //      return "Merhaba " + name
 //  }
 //  console.log(merhaba("AAAAAAAAAAAAAAAAAA"))


 // Immediately Invoked Function Expression (IIFE)


 //  (function(name) {
 //      console.log("Merhaba " + name)
 //  })("Murat"); //SONDAKİ PARANTEZ ÇAĞIRIYOR


 //-

 const database = {
     host: "localhost",
     add: function() {
         console.log("Eklendi")
     },
     get: function() {
         console.log("Elde Edildi")
     },
     update: function(id) {
         console.log(`ID: ${id}, Güncellendi`)
     },
     delete: function(id) {
         console.log(`ID: ${id}, Silindi`)
     }
 }

 console.log(database.host)

 database.add()

 database.delete(200)

 database.update(32032)