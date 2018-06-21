var detectNetwork = function(cardNumber) {
  const prefix = cardNumber[0] + cardNumber[1];
  const threePrefix = prefix + cardNumber[2];
  const fourPrefix = prefix + cardNumber[2] + cardNumber[3];
  if (cardNumber.length === 14 && (prefix === "38" || prefix === "39")) {
    return "Diner's Club";
  } else if (cardNumber.length === 15 && (prefix === "34" || prefix === "37")) {
    return "American Express";
  } else if (
    (cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19) &&
    cardNumber[0] === "4"
  ) {
    return "Visa";
  } else if (
    cardNumber.length === 16 &&
    (prefix === "51" ||
      prefix === "52" ||
      prefix === "53" ||
      prefix === "54" ||
      prefix === "55")
  ) {
    return "MasterCard";
  } else if (
    (cardNumber.length === 16 || cardNumber.length === 19) &&
    (prefix === "65" ||
      (threePrefix >= "644" && threePrefix <= "649") ||
      fourPrefix === "6011")
  ) {
    return "Discover";
  } else if (
    cardNumber.length > 11 &&
    cardNumber.length < 20 &&
    (fourPrefix === "5018" ||
      fourPrefix === "5020" ||
      fourPrefix === "5038" ||
      fourPrefix === "6304")
  ) {
    return "Maestro";
  } else {
    return -1;
  }
};
