let value;
const programmer = {
    name: "Mustafa Murat Coşkun",
    age: 25,
    email: "cccc@cc.com",

    langs: ["Java", "CSS", "HTML"],

    addres: {
        city: "Antalya",
        street: "Bahçelievler"
    },

    work: function() {
        console.log("Program Çalışıyor")
    }
}

value = programmer

value = programmer.email

value = programmer["email"]

value = programmer.langs

value = programmer.addres.city

programmer.work()

const programmers = [{
        name: "Mustafa Murat",
        age: 25
    },
    {
        name: "Oğuz",
        age: 25
    },
]

value = programmers[0].name


console.log(value)