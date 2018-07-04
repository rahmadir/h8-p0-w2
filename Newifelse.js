var nama = 'Madi';
var peran = 'Penyembuh';

if (nama == ''){
    console.log('Nama Harus Di Isi!');
}
else {
    if (peran ==''){
    console.log('Hallo ' + nama + ' Pilih peran anda untuk mulai berperang!');
    }
else if (peran == 'Pemanah'){
    console.log('Selamat datang di Dunia Proxtia '+nama);
    console.log('Halo Pemanah '+ nama +' kamu dapat menyerang dengan Panahmu!');
}
else if (peran == 'Kesatria'){
        console.log('Selamat datang di Dunia Proxtia '+nama);
        console.log('Halo Kesatria '+ nama +' kamu dapat menyerang dengan Pedangmu!');
}
else if (peran == 'Penyembuh'){
     console.log('Selamat datang di Dunia Proxtia '+nama);
     console.log('Halo Penyembuh '+ nama +' kamu dapat menyembuhkan para Pasukan! ');
}
else {

}
}