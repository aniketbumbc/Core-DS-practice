/* Average Pair */

function avgPair(arry, pair) {
  let start = 0;
  let end = arry.length - 1;

  while (start < end) {
    let avg = arry[start] + arry[end] / 2;
    if (avg === pair) {
      return true;
    }
    if (avg < pair) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

// console.log(avgPair([-1, 0, 3, 4, 5, 6], 4.1));

function maxSubarrayNum(arr, num) {
  let total = 0;

  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for (let j = num; j < arr.length; j++) {
    console.log(arr[j], arr[j - num], currentTotal);
    currentTotal += arr[j] - arr[j - num];
    console.log('current', currentTotal);
    total = Math.max(total, currentTotal);
  }

  return total;
}

console.log(maxSubarrayNum([100, 200, 300, 400], 2));
