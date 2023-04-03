/* 1) Напишите функцию, которая заполняет новый массив предоставленным значением и затем ее возвращает.
   Функция должна первым параметром принимать элемент (значение для массива), вторым параметром размер массива.
   Например: myFunc('a', 3)   // ['a', 'a', 'a'] */

function arrayFill(value, size) {
    let arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrayFill('a', 3));

/* 2) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
   Функция наша принимает массив любых элементов. 
   Например: 
   const data = [1, 2, 3]; 
   myFunc(data); // [3, 2, 1] */

const data = [1, 2, 3];
data.reverse()
console.log(data)

/* 3) Напишите функцию которая меняет текстовое содержимое элемента.
Функция принимает два параметра, идентификатор элемента и текстовку.
myFunc('desc', 'Hello world'); //находит элемент с идентификатором desc и
заменяет текстовку на Hello world  */

const text = document.getElementById('desc');
const replacedText = text.innerText;
text.innerText = 'Hello World';
console.log(replacedText)