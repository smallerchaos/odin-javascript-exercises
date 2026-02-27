const roundToOneDecimalPoint = function (num) {
  let splitNumber = String(num).split(".");
  let decimals = splitNumber[1].split("");
  decimals.splice(1,0,".");
  decimals = Number(decimals.join(""));
  if (decimals > 5) {
    decimals = Math.ceil(decimals);
  } else {
    decimals = Math.floor(decimals);
  }
  return Number(splitNumber[0] + "." + String(decimals));
}

const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5/9);
  if (Number.isInteger(celcius) === false) {
    celcius = roundToOneDecimalPoint(celcius);
  }
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * (9/5)) + 32;
  if (Number.isInteger(fahrenheit) === false) {
    fahrenheit = roundToOneDecimalPoint(fahrenheit);
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*
Thoughts and Reflections

BRUH. So I guess the problem is that I just can't math. What they did was simply:

return Math.round((fahrenheit - 32) * (5/9) * 10)/10)

By multiplying it by 10, I think it gives you one extra decimal point and then by dividing it by 10 again, it puts the decimal point in the right place... I sort of thought my method was ridiculously convoluted and I was right. I was sure there was a more elegant way to do it...

But... my solution does still work. ><

I think it's pretty clear that I need to do some math stuff so thank goodness it's in the p1xt guides...

*/
