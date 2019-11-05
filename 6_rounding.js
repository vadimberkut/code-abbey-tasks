document.addEventListener('DOMContentLoaded', function(){
  var title = "#6 Rounding";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "16 -68 20 -72 20 7505 1176 -8852331 -1041937 4047 408 6751967 268 9019700 614 4800313 954 9049060 998 5386132 191 -6018260 1154960 3099178 179 19217 1036 5534160 455 6745 1132 8251 554 8597 1982 -2397232 -893976";
  console.log('Input data: ', inputData);
  var data = parseInputData(inputData);
  var result = performTask(data);
  console.log('Result: ', result);
  console.log('Test: ', testData(data));
  console.log('Answer: ', result.join(' '));
});

function parseInputData(data){
  var separator = ' ';
  var oneDataCount = 2;
  var arr = data.split(separator);
  var parsed = {
    count: 0,
    arr: [] //array of arrays
  };
  parsed.count = +arr[0];
  arr = arr.slice(1, arr.length);
  for (var i = 0; i < arr.length; i+=oneDataCount) {
    parsed.arr.push(arr.slice(i, i + oneDataCount));
  }
  parsed.arr = parsed.arr.map(function(array){ return array.map(function(number){ return +number; }); });
  return parsed;
};

function performTask(data){
  var result = data.arr.map(function(item, i, arr){
    var number1 = item[0];
    var number2 = item[1];
    var quotient = number1 / number2; //частное

    //отделяем целую и дробную часть
    var lessThan10 = quotient % 10 === quotient;
    if(lessThan10){

    }

    var intPart = parseInt(quotient);
    var floatPart = quotient - intPart;

    //round
    var rounded;
    var roundDirection = Math.abs(floatPart) < 0.5 ? -1 : +1;
    // if(quotient < 0){
    //   roundDirection = -1 * roundDirection;
    // }
    if(roundDirection === 1){
      rounded = intPart < 0 ? intPart - 1 : intPart + 1;
    }
    if(roundDirection === -1){
      rounded = intPart;
    }
    return rounded
  });
  return result;
};

function testData(data){
  var result = data.arr.map(function(item, i, arr){
    return Math.round(item[0]/item[1]);
  });
  return result;
}