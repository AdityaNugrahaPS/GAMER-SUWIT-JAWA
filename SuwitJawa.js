var Player = prompt('pilihan : Gajah/Orang/Semut') //input pilihan di pop up box

var Computer
var Random = Math.floor(Math.random() * 3 + 1)//dari 1 sampai 3 random

if(Random == 1){
    Computer = 'Orang'
} else if(Random == 2) {
    Computer = 'Gajah'
} else {
    Computer = 'Semut'
}

//menampilkan hasil
var hasil = ''

if (Player == Computer) {
    hasil = 'SERI'
} else if (Player == 'Orang') {
    hasil = (Computer == 'Semut') ? 'KALAH' : 'KALAH'
} else if (Player == 'Gajah') {
    hasil = (Computer == 'Orang') ? 'MENANG' : 'KALAH'
} else if (Player == 'Semut') {
    hasil = (Computer == 'Gajah') ? 'MENANG' : 'KALAH'
} else {
    hasil = 'Pilihan Invalid'
}

alert(`Player : ${Player} || Computer : ${Computer} || Hasil : ${hasil}`)
