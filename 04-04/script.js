/* **********TASK1*********** */

let pics = document.getElementsByTagName('img');

function showName() {
    alert(this.getAttribute('alt'));
}

for (let i = 0; i < pics.length; i++) {
    pics[i].onclick = showName;
}

/* **********TASK2*********** */

let elem = document.getElementsByTagName('a');

function showDesc() {
    alert(this.getAttribute('href'));
}

for (let i = 0; i < elem.length; i++) {
    elem[i].onmouseenter = showDesc;
}

/* **********TASK3*********** */

function linkStrings() {
    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result
}
console.log(linkStrings('hello ', 'world'))

/* **********TASK4*********** */

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const numbers = [1, 2, 3];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
