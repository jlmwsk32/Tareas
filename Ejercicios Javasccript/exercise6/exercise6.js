function bubbleSort(arr) {
  const n = arr.length;
  const sortedArray = arr.slice();

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
}

const inputArray = [3, 6, 12, 5, 100, 1];
const sortedArray = bubbleSort(inputArray);

console.log("Entrada:", inputArray);
console.log("Salida:", sortedArray);
