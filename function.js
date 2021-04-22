/**
 * Returns an array with the four largest values from an input array
 * Input must have length greater than 4
 * 
 * @param {int array} input 
 */
 function getFourLargestValues(input) {
    if (input.length < 4) {
      console.log("Input length is less than four");
      return input;
    }
  
    if (input.some(isNaN)) {
      console.log("Input array must contain only numbers");
      return input;
    }
  
    // Variables to store the four highest values, set to negative infinity to be below negative numbers
    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;
    let fourth = Number.NEGATIVE_INFINITY;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > first) {
        fourth = third;
        third = second;
        second = first;
        first = input[i];
      } else if (input[i] > second) {
        fourth = third;
        third = second;
        second = input[i];
      } else if (input[i] > third) {
        fourth = third;
        third = input[i];
      } else if (input[i] > fourth) {
        fourth = input[i];
      }
    }
    return [first, second, third, fourth];
  }
  