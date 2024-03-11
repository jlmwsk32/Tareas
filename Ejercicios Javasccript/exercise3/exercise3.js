function calculateSumAndProduct(numbers) {
  
  let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  let product = numbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  }, 1);

  console.log("The sum is " + sum + ". The product is " + product + ".");
}

calculateSumAndProduct([1, 2, 3, 4]);