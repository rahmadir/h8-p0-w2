//LOOPING

/*
1.Melakukan Looping Menggunakan While
*/
console.log('1.Melakukan Looping Menggunakan While')

var headerLoop1 = 'LOOPING PERTAMA';
var headerLoop2 = 'LOOPING KEDUA';
var deret = 0;

console.log(headerLoop1);

while(deret < 20) {
    deret+=2;
    console.log(deret+' - I love coding');
}

console.log(headerLoop2);

var deret =22;

while(deret > 2) {
    deret-=2;
    console.log(deret+' - I will become full stack developer');
}
console.log('----------------Selesai-----------------');
//2.Melakukan Lopping Menggunakkan for
console.log('2.Melakukan Lopping Menggunakkan for');

console.log(headerLoop1);

for(var deret = 1; deret < 21; deret += 1) {
  console.log(deret + ' - I love coding ');
}

console.log(headerLoop2);

for(var deret = 20; deret > 0; deret -= 1) {
    console.log(deret + ' - I will become full stack developer');
  }
console.log('----------------Selesai-----------------');
//3.Angka Ganjil dan Genap
console.log('3.Angka Ganjil dan Genap');


var counter = 0;

while(counter < 100) {
    counter++;{
        console.log(counter+' Ganjil');
    }
    counter++;{
        console.log(counter+' Genap');
    }

}

//---------------------------------------

var counter = 0;
while(counter < 100){
    counter++;{
        console.log(counter+'');
    }
    counter+=2;{
        console.log(counter+' Kelipatan 3');
    }
}

//--------------------------------------
var counter = 0;
while(counter < 100){
    counter++;{
        console.log(counter+'');
    }
    counter+=5;{
        console.log(counter+' Kelipatan 6');
    }
}
//-----------------------------------------
var counter = 0;
while(counter < 100){
    counter++;{
        console.log(counter+'');
    }
    counter+=9;{
        console.log(counter+' Kelipatan 10');
    }
}

console.log('selesai');