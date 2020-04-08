function bubbleSort(array) {
  let i = 0;
  let j = i + 1;

  swap(array, i, j);

  return array;
}

// function swap(array) {
//   let len = array.length;
//   let returnArr = [];

//   for (let i = 0; i < len; ++i) {
//     for (let j = 1 + i; j < len; ++j) {
//       let left = array[i];
//       let right = array[j];

//       if (left < right) {
//         return array;
//       } else if (array[i] < array[j]) {
//         console.log("second if");
//         // array[i] = right;
//         // array[j] = left;

//         array.splice(j, 1);
//         array.splice(i, 0, right);
//         return swap(array);
//       }
//     }
//   }
// }

const sampleArr = [2, 60, 24, 13];

function swap(array, i, j) {
  if (array.length <= 1) {
    return array;
  }
  let left = array[i];
  let right = array[j];

  if (left < right) {
    return swap(array, i + 1, i + 2);
  } else if (array[i] > array[j]) {
    array.splice(j, 1);
    array.splice(i, 0, right);
    return swap(array, i + 1, i + 2);
  } else if (!right) {
    let sorted = true;
    for (let k = 0; k < array.length - 1; k++) {
      if (array[k] > array[k + 1]) {
        sorted = false;
      }
    }

    if (sorted === false) {
      return swap(array, 0, 1);
    } else {
      return array;
    }
  }
}
