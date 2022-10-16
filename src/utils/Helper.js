// FORM VALIDATION
const isInputValid = (input, max) => {
  if (input.length > max) {
    return false;
  } else return true;
};

//FORM DATE
const formatDate = (timestamp) => {
  const videoDate = new Date(timestamp);
  return videoDate.toLocaleDateString();
};

export { isInputValid, formatDate };
