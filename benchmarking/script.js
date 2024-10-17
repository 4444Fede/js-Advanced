console.log('Exercise 1')
console.log('')

let array = [];
for (let index = 0; index < 1000000; index++) {
  array.push(index);
}

console.time("for loop");
for (let i = 0; i < array.length; i++) {
  array[i] = array[i] + 1;
}
console.timeEnd("for loop");

console.time("while loop");
let x = 0;
while (x < array.length) {
  array[x] = array[x] + 1;
  x++;
}
console.timeEnd("while loop");

console.time("forEach loop");
array.forEach((element, index) => {
  array[index] = element + 1;
});
console.timeEnd("forEach loop");

console.log('')
console.log('Exercise 2')
console.log('')

let globalVar = 0;

function globalVarTest() {
  console.time("global variables");
  for (let i = 0; i < 1000000; i++) {
    globalVar++;
  }
  console.timeEnd("global variables");
}

function localVarTest() {
  console.time("local variables");
  let localVar = 0;
  for (let i = 0; i < 1000000; i++) {
    localVar++;
  }
  console.timeEnd("local variables");
}

globalVarTest();
localVarTest();

console.log('')
console.log('Exercise 3')
console.log('')

function concatWithPlus() {
console.time("concatenation with +");
let result = "";
for (let i = 0; i < 1000000; i++) {
    result += "X";
}
console.timeEnd("concatenation with +");
}
  
function concatWithTemplate() {
console.time("concatenation with template literals");
let result = "";
for (let i = 0; i < 1000000; i++) {
    result = `${result}X`;
}
console.timeEnd("concatenation with template literals");
}

concatWithPlus();
concatWithTemplate();