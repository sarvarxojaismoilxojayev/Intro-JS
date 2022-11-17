// let ism = prompt("Ismingiz Nima")

// alert("salom " + ism)

// let fruits = [
//     "apple",
//     "banana",
//     "cherry",
//     "peach",
//     "lemon",
//     "orange",
//     "melon"
// ]

// let research = prompt("qancha pulin bor")

// if (research >= 1000) {
//     alert(fruits[0])
// }

// else if (research >= 2000) {
//     alert(fruits[1])
// }

// else {
//     alert("sur bottan")
// }

let intro = alert("O'zingizni Tanishtiring")
let ism = prompt("ismingiz")
let fam = prompt("familiangiz")
let yosh = prompt("tugilgan yilingiz")
let pasp = prompt("pasport raqamingiz")
let millat = prompt("millatingiz")
let tugil = prompt("tugilgan joyingiz")
let time = prompt("tugilgan vaqtingiz")
let nomer = prompt("Iltimos! " + ism + " akajon nomerizi yozvoring!!!")

alert(
    ` Your Info\n Ismingiz: ${ism};\n Familiangiz: ${fam};\n Yoshingiz: ${2022 - yosh};\n Pasport Raqamingiz: ${pasp};\n Millatingiz: ${millat};\n Tulgan Joyingiz: ${tugil};\n Tugilgan Vaqtingiz: ${time};\n Nomeringiz: ${nomer};\n ${"Ish Bitti " + ism + " Aka"}`
)