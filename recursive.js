// function countDown(num) {
//   if (num <= 0) {
//     console.log('All Done');
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(5);

// sumRange

// function sumRange(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(4));

//factorial 4*3*2*1

function facto(num) {
  if (num === 1) {
    return 1;
  }

  return num * facto(num - 1);
}

console.log(facto(5));
