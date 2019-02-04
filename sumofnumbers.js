function sumFor(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
function sumWhile(array) {
  let i = 0;
  let sum = 0;
  while(i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}
function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1));
}
function sumTheSimpleWay(array) {
  return _.reduce(array, (memo, num) => {return memo + num}, 0);
}

console.log(sumFor([1,2,3,4,5]));
console.log(sumWhile([1,2,3,4,5]));
console.log(sumRecursion([1,2,3,4,5]));
console.log(sumTheSimpleWay([1,2,3,4,5]));
