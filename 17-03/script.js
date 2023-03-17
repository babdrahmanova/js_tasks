//1) false && false = false;
const order = 115;
const productName = 'Brush';

const check1 = order > 116 &&  'Brush' < '' ;
console.log(check1);

//2) false && true = false
const participantQuanity = 31;
const enter = 'max 30';

const check2 = participantQuanity < 30 &&  'max 30' < enter ;
console.log(check2);

//3) true  && false = false
const availableCash = 2000;
const cardType = 'visa';

const check3 = availableCash > 1999 &&  cardType === availableCash ;
console.log(check3);

//4) true  && true = true
const laptop =  'HP';
const storageSize = 226;

const check4 = laptop > '' &&  storageSize == 226 ;
console.log(check4);

/* second task */
//1) ex
let num = 10;
num++;
num++;
num--;
console.log(num); //11

//2) ex
let num2 = 47;
num2 += 7;
num2 -= 18;
num2 *= 10;
num2 /= 15;
console.log(num2); //24

//3) ex
let num3 = 1;
num3 += 12;
num3 -= 14;
num3 *= 5;
num3 /= 7;
num3++;
num3--;
console.log(num3); //-0.7142857142857143