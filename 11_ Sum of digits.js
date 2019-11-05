document.addEventListener('DOMContentLoaded', function(){
  var title = "#11 Sum of digits";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "3 11 9 1 14 90 232 111 15 111";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 3 });
  var result = performTask11(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask11(data){
  var result = data.arr.map(function(item, i, arr){
    var A = item[0];
    var B = item[1];
    var C = item[2];

    var D = A*B + C;
    var digits = [];
    var digitsSum = 0;

    while(D !== 0){
        var lastDigit = D % 10;
        D = D / 10;
        D = parseInt(D);
        digits.push(lastDigit);
    }
    digitsSum = digits.reduce(function(ac, el){ return ac + el; }, 0);

    return digitsSum;

  });
  return result;
};

function testResult(data){
return data;
}
