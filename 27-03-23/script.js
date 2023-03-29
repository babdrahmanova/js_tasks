// task
function showMin(a, b) {
    if (a > b){
        return b;
    } else if (a < b) {
        return b;
    } else {
        return 'equal';
    }
}
 const f1 = showMin(77, 11);
 console.log(f1)

//  task1
function cube(num) {
    let result = num ** 3;
    console.log(result);
}
cube(3);
console.log()

// task2 write code without 
/* function getName(name) {
    if (name) {
        return "Привет, " + name;
    } else {
        return "Привет, гость";
    }
}
console.log(getName("Василий"));
console.log(getName()); */

function getName(name = 'гость') {
    return `Привет, ${name}`;
  }
  let name = 'Василий'
  console.log(getName(name));

// task3
function calculateFinalGrade(exam, projects) {
    if (exam >= 90 || projects > 10) {
        return 100;
    } else if (exam >= 75 && projects >= 5) {
        return 90;
    } else if (exam >= 50 && projects >= 2) {
        return 75;
    } else if (exam >= 30 && projects >= 1) {
        return 50;
    } else {
        return 0;
    }
}
console.log(calculateFinalGrade(90, 10)); // Outputs: 100
console.log(calculateFinalGrade(75, 5)); // Outputs: 90
console.log(calculateFinalGrade(50, 2)); // Outputs: 75
console.log(calculateFinalGrade(30, 1)); // Outputs: 50
// console.log(calculateFinalGrade()); // Outputs: 0



    