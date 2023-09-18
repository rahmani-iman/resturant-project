const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

function separateDigitsWithComma(number) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Separate the string into groups of three digits from the right
    let separatedDigits = [];
    while (numberString.length > 3) {
      separatedDigits.unshift(numberString.slice(-3));
      numberString = numberString.slice(0, -3);
    }
  
    // Add the remaining digits to the separatedDigits array
    separatedDigits.unshift(numberString);
  
    // Join the separated digits with commas and return the result
    return separatedDigits.join(",");
}

function separateNumbers(number) {
    // Remove any decimal part
    var decimalIndex = number.toString().indexOf('.');
    if (decimalIndex !== -1) {
      number = number.substring(0, decimalIndex);
    }
  
    // Separate digits into groups of three from the right with a comma
    var separatedNumber = '';
    for (var i = number.length - 1; i >= 0; i--) {
      separatedNumber = number[i] + separatedNumber;
      if ((number.length - i) % 3 === 0 && i !== 0) {
        separatedNumber = ',' + separatedNumber;
      }
    }
  
    return separatedNumber;
}
  

export {isInCart, quantityCount , separateDigitsWithComma, separateNumbers};