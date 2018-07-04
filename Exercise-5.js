//String

/*
Soal Nomor 1
*/

//INPUT
var word = 'JavaScript';
var second = ' is';
var third = ' awesome';
var fourth = ' and';
var fifth = ' I';
var sixth = ' love';
var seventh = ' it!';
//OUTPUT
console.log(word.concat(second).concat(third).concat(fourth).concat(fifth).concat(sixth).concat(seventh));

/*
Soal Nomor 2
*/

var word = 'Wow';
var secondWord = 'JavaScript';
var thirdWord = 'is';
var fourthWord = 'Amazing';
var fifthWord = 'Alogatihm';

console.log('First Word: ' + word);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

/*
Soal Nomor 3
*/
var word3 = 'Javascript so cool';
var secondWord3 = 'is this your car?'
var thirdWord3 = 'so hot'
var fourthWord3 = 'Amazing Spidermen2'
var fifthWord3 = 'Right? or left'

console.log('First Word: ' + word3.substring(0, 10));
console.log('Second Word: ' + secondWord3.substring(0, 2));
console.log('Third Word: ' + thirdWord3.substring(0, 2));
console.log('Fourth Word: ' + fourthWord3.substring(0, 7));
console.log('Fifth Word: ' + fifthWord3.substring(0, 6));


/*
Soal Nomor 4
*/
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 26);
var secondWord4 = 'never give up'
var exampleSecondWord4 = secondWord4.substring(0, 14);
var thirdWord4 = 'im the best'
var exampleThirdWord4 = thirdWord4.substring(0, 26);
var fourthWord4 = 'make'
var exampleFourthWord4 = fourthWord4.substring(0, 26);
var fifthWord4 = 'it easy'
var exampleFifthWord4 = fifthWord4.substring(0, 26);

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = exampleSecondWord4.length;
var thirdWordLength = exampleThirdWord4.length;
var fourthWordLength = exampleFourthWord4.length;
var fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord4 +', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdWord4 + ',with length: '+ thirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord4 + ',with length: '+ fourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord4 +'with lenght: '+ fifthWordLength);

