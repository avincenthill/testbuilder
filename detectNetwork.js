var detectNetwork = function(cardNumber) {
  const prefix = cardNumber[0] + cardNumber[1];
  const threePrefix = prefix + cardNumber[2];
  const fourPrefix = prefix + cardNumber[2] + cardNumber[3];
  const sixPrefix = fourPrefix + cardNumber[4] + cardNumber[5];
  if (cardNumber.length === 14 && (prefix === "38" || prefix === "39")) {
    return "Diner's Club";
  } else if (cardNumber.length === 15 && (prefix === "34" || prefix === "37")) {
    return "American Express";
  } else if (
    (cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19) &&
    (cardNumber[0] === "4" &&
      !["4903", "4905", "4911", "4936"].includes(fourPrefix))
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
  } else if (
    //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288
    //and a length of 16-19.
    cardNumber.length >= 16 &&
    cardNumber.length <= 19 &&
    ((parseInt(sixPrefix) >= 622126 && parseInt(sixPrefix) <= 622925) ||
      (parseInt(threePrefix) >= 624 && parseInt(threePrefix) <= 626) ||
      (parseInt(fourPrefix) >= 6282 && parseInt(fourPrefix) <= 6288))
  ) {
    return "China UnionPay";
  }
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182,
  //633110, 6333, or 6759 and a length of 16, 18, or 19.
  //Heads up! Switch and Visa seem to have some overlapping card numbers -
  //in any apparent conflict, you should choose the network with the longer prefix.
  else if (
    cardNumber.length >= 16 &&
    cardNumber.length <= 19 &&
    (["4903", "4905", "4911", "4936", "6333", "6759"].includes(fourPrefix) ||
      ["564182", "633110"].includes(sixPrefix))
  ) {
    return "Switch";
  } else {
    return -1;
  }
};
