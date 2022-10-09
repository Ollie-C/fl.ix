// FORM VALIDATION
const isInputValid = (input, min, max) => {
  if (input.length < min || input.length > max) {
    return false;
  }
  return true;
};

const isFormValid = (inputA, inputB) => {
  if (!inputA || !inputB) {
    return false;
  }

  if (!isInputValid) {
    return false;
  }

  return true;
};

export { isInputValid, isFormValid };
