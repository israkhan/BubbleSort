
const testArr = [9,2,8,1,5,0]

function split(wholeArray) {
  if(wholeArray.length <= 1) {
    return [wholeArray]
  }
  let middle = Math.floor(wholeArray.length / 2)
  let firstHalf = wholeArray.slice(0, middle)
  let secondHalf = wholeArray.slice(middle)
  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  if(arr2 === undefined) {
    return arr1;
  }
  if(arr1.length === 1 && arr2.length === 1) {
    if(arr1[0] < arr2[0]) {
      return [arr1[0], arr2[0]]
    } else {
      return [arr2[0], arr1[0]]
    }
  }
  let tmpArr = []
  let i = 0;
  let j = 0;
  while( i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      tmpArr.push(arr1[i])
      i++;
    } else {
      tmpArr.push(arr2[j])
      j++;
    }
  }

  return tmpArr;
}