// let arrays = ([1,2,3],[4,5,6],5)

// function makeArray(firstArray, secondArray, maxLength) {

//   const allarrays = firstArray.concat(secondArray);

//   return allarrays.length > maxLength ? allarrays.slice(0, maxLength) : allarrays.slice();

// }

// console.log(makeArray)

// function calculateTotal(number) {
//     // Change code below this line
//    let sum = 0;
//    for (let i=0; i<= number; i+=1) {
//      sum += i;
//    }
//    return sum;
//      // Change code above this line
//    }

//    console.log(return);

function filterArray(numbers, value) {
  // Change code below this line

  let newArray = [];

  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }

  return newArray;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
