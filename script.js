function convertToRoman(num) {
  const obj = [
    { value: 1000, numeral: "M" },
    { value: 500, numeral: "D" },
    { value: 100, numeral: "C" },
    { value: 50, numeral: "L" },
    { value: 10, numeral: "X" },
    { value: 5, numeral: "V" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of obj) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}





// do not edit below this line
module.exports = convertToRoman
