// FORM VALIDATION
const isInputValid = (input, max) => {
  if (input.length > max) {
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
