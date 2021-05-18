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

console.log(avgPair([-1, 0, 3, 4, 5, 6], 4.1));
