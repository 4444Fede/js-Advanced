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

