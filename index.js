let alisherPul = parseFloat(prompt("Alisher qancha pulingiz bor ekanligini kiriting (so'mda):"));


let safarHarajatlariDollar = 870; 
let kurs = 12650; 
let safarHarajatlariSom = safarHarajatlariDollar * kurs;


let qolganPul = alisherPul - safarHarajatlariSom;


if (qolganPul >= 0) {
    console.log("Oq yo'l, Alisher!");
} else { 
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
}
