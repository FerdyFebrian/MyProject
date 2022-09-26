var tanya = true;
while (tanya) {

// Menangkap pilihan player
var comp = Math,random;
var p = prompt('pilih : gajah, semut, orang');

// Menangkap pilihan computer
if ( comp < 0.34 ) {
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.67 ) {
    comp = 'orang'; 
} else {
    comp = 'semut';
}

// Membangkitkan bilangan random

 if( p == comp ){
    hasil = 'SERI!';
} else if( p == 'gajah' ) {
    hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH';
} else if( p == 'orang' ) {
    if( comp == 'gajah' ) {
    } else {
        hasil = 'MENANG!';
    }
}   
// Menentukan rules
if( p == comp) {
    hasil = 'SERI!';
} else if( p == 'gajah' ) {
    hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
} else if( p == 'orang') {
    hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
} else if( p == 'semut') {
    hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Memasukkan Pilihan Yang Salah!!';
}


// Tampilkan hasilnya
alert('Kamu Memilih : ' + p + ' Dan Komputer Memilih : ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);
}
