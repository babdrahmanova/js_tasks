/*  function helloWorld() {
    let count = 0;
    const intervalId = setInterval(() => {
      console.log("Hello World");
      count++;
      if (count === 5) {
        console.log("Done");
        // clearInterval(intervalId);
      }
    }, 1000);
  }
  */

//   TASK1

/* let count = 0;
const intervalId = setInterval(() => {
    console.log("Hello World");
    count++;
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Done");
    }
}, 1000); */

//TASK2

function func1(message, time) {
    setTimeout(() => {
        console.log(message);
    }, time)
}
func1('Hello after 4 seconds', 4000);
func1('Hello after 8 seconds', 8000);

// TASK3

/* Пользователь вводит число от 1 до 31, которое присваивается переменной day. 
   Определите в какую декаду месяца попадает это число: в первую, вторую или третью. 
   Результат нужно вывести на экран.
   Используйте конструкцию swith-case. */

/* let day = parseInt(prompt("Введите число от 1 до 31"));
/* let firstDecade = day >= 1 && day <= 10;
let secondDecade = day >= 11 && day <= 20;
let thirdDecade = day >= 21 && day <= 31; */

// switch (true) {
//     case (day >= 1 && day <= 10):
//         alert("Введенное число в первой декаде месяца");
//         break;
//     case (day >= 11 && day <= 20):
//         alert("Введенное число во второй декаде месяца");
//         break;
//     case (day >= 21 && day <= 31):
//         alert("Введенное число в третьей декаде месяца");
//         break;
//     default:
//         alert("Введите число от 1 до 31");
// } 