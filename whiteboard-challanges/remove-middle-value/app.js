function removeMiddleValue(arr) {
    if(arr.length <=1){
        return arr;
    }
    let middleIndex=0;
    let i=0;
    while(i + i + 1 < arr.length) {
        middleIndex++;
        i++;
    }
  const result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i !== middleIndex) {
      result[j] = arr[i];
      j++;
    }
  }
  return result
}
console.log(removeMiddleValue([1, 2, 3, 4, 5])); 
console.log(removeMiddleValue([10, 15, 16, 14, 19])); 
console.log(removeMiddleValue([10, 20, 30, 40, 50, 60, 70]));


