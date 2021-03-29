// Given a large array of integers and a window of size ww,
// find the current maximum value in the window as the window slides through the entire array.

function findMaxValue(arr, windowSize) {
  let result = [];

  if (arr.length == 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  let window_ = [];
  //find out max for first window
  for (let i = 0; i < windowSize; i++) {
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    window_.push(i);
  }

  result.push(arr[window_[0]]);

  for (let i = windowSize; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }

    //remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 && window_[0] <= i - windowSize) {
      window_.shift();
    }

    window_.push(i);
    result.push(arr[window_[0]]);
  }
  return result;
}

let array = [-4, 2, -5, 1, -1, 6];
console.log('Max = ' + findMaxValue(array, 3));
