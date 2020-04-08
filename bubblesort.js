function bubbleSort(array) {
  return swap(array)
}
const sampleArr = [2,60,24,13]

function swap(array) {
  let len = array.length;
  for(let i = 0; i < len; ++i) {
    for(let j = 0; j < len; ++j){
      let left = array[i]
      let right = array[j]
      if( array[i] < array[j]) {
        continue
      } else if(array[i] > array[j]) {
        array[i] = right
        array[j] = left
        swap(array)
      }
    }
  }
}