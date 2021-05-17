function subArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

// console.log(subArray([1, 2, 3, 4, 5], 2));

/**
 *  Check two number same fequency of degit
 */

function checkFeq(num1, num2) {
  let numObj1 = makeObje(num1);
  let numObj2 = makeObje(num2);

  for (let num in numObj1) {
    if (numObj2[num] !== numObj1[num]) {
      return false;
    }
  }
  return true;
}

function makeObje(num) {
  let temp = num.toString().split('');
  let num1Obj = {};
  for (let num of temp) {
    if (num1Obj[num] !== undefined) {
      num1Obj[num]++;
    } else {
      num1Obj[num] = 1;
    }
  }

  return num1Obj;
}

console.log(checkFeq(22, 32));
