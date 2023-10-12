// Write a JavaScript program to get integers in the range (x, y) using recursion.  
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

// for loop
function range(x, y) {
  let range = [];

  for (let i = x + 1; i < y; i++) {
    range.push(i);
  }

  return range;
}

console.log(range(2, 9));

// recursion
function range2(x, y) {

  if (y - x === 2) {
    return [y - 1];
  } else {
    const range = range2(x, y - 1);
    range.push(y - 1);
    return range;
  }

}

console.log(range2(2, 9));