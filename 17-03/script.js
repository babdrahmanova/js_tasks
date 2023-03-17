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