// FORM VALIDATION
const isInputValid = (input, max) => {
  if (input.length > max) {
    return false;
  } else return true;
};

export { isInputValid };
