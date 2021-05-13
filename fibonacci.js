//Using recursive function to achieve the fibonacci series
var fibonacci = (n) => {
  if (n === 0) {
    console.log("Please enter the number > 0")
  }
  else if (n === 1) {
    return [0]
  }
  else if (n == 2)
    return [0, 1]

  else {
    //series is the array for which we are pushing actual fibonacci series
    var series = fibonacci(n - 1);

    series.push(series[series.length - 1] + series[series.length - 2]);
    return series

  }
};


//Here we are calling the fibonacci function to get the series of an nth integer
console.log(fibonacci(8));


//Here exporting the module to work with test cases
module.exports = fibonacci;