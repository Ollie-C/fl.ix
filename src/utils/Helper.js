// FORM VALIDATION
const isInputValid = (input, max) => {
  if (input.length > max || input.length === 0) {
    return false;
  } else return true;
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
