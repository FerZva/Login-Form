//Veryfi if user is elderly to drive

//0-3: Muy deficiente
//3-5: Insuficiente
//5-6: Suficiente
//6-7: Bien
//7-9: Notable
//9-10: Sobresaliente

let age = prompt("How old are you?");

if (age < 3) {
    console.log("Muy deficiente " + age);
} else if (age < 5) {
    console.log("Insuficiente " + age);
} else if (age < 6) {
    console.log("Suficiente " + age);
} else if (age < 7) {
    console.log("Bien " + age);
} else if (age < 9) {
    console.log("Notable " + age);
} else if (age < 10) {
    console.log("Sobresaliente " + age);
} else if (age > 11) {
    console.log("Sobresaliente " + age);
}

