function isEven(number) {
  if (typeof number === 'number') {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Error argument must be a number';
  }
}

module.exports = isEven;
