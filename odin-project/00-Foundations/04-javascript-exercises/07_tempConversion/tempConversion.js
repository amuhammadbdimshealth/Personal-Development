const convertToCelsius = function (fahTemp) {
  let celcius = ((fahTemp - 32) * (5 / 9)).toFixed(1);
  return parseFloat(celcius);

};

const convertToFahrenheit = function (celTemp) {
  let fahrenheit = (celTemp * (9 / 5) + 32).toFixed(1);
  return parseFloat(fahrenheit);
};

const result1 = convertToCelsius(32); //toEqual(0);
result1;
const result2 = convertToCelsius(100); //toEqual(37.8);
result2;
const result3 = convertToCelsius(-100); //toEqual(-73.3);
result3;
const result4 = convertToFahrenheit(0); //toEqual(32);
result4;
const result5 = convertToFahrenheit(73.2); //toEqual(163.8);
result5;
const result6 = convertToFahrenheit(-10); //toEqual(14);
result6;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
