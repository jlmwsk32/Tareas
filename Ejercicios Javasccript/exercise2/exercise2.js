function doubleNumbers(numbers) {
    let doubledArray = numbers.map(function(number) {
      return number * 2;
    });
    console.log(doubledArray);
  }
  doubleNumbers([1, 2, 4, 5]);