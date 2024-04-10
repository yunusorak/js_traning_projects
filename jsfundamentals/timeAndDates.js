let value;


const now = new Date() //ŞUAN Kİ ZAMAN

const date1 = new Date("9-5-2001 06:15:33")

const date2 = new Date("September 5 2001")

const date3 = new Date("5 / 9 / 2001")
console.log(date3)
value = date1
console.log(value)
value = date1.getMonth()
console.log(value)
value = date1.getDate()
console.log(value)
value = date1.getDay()
console.log(value)

value = date1.getHours()
console.log(value)
value = date1.getMinutes()
console.log(value)
value = date1.getSeconds()
console.log(value)
value = date1.getMilliseconds()
console.log(value)


date1.setMonth(7) //OCAK 0'DAN BAŞLIYOR ONDAN DOLAYI 7.AY AĞUSTOS, 8.AY EYLÜL 
console.log(date1)
date1.setDate(15)
console.log(date1)
date1.setFullYear(2022)
console.log(date1)
date1.setHours(0)
console.log(date1)
date1.setMinutes(15)
console.log(date1)
date1.setSeconds(30)
console.log(date1)

value = date1
console.log(value)



console.log(value)