document.addEventListener('DOMContentLoaded', function(){
  var title = "#13 Weighted sum of digits";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "3 9 15 1776";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 1 });
  var result = performTask13(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask13(data){
    var result = data.arr.map(function(item, i, arr){
        var digit = item;
        var weightedSum = 0;
        var digits = [];
        while(digit > 0){
            var lastDigit = digit % 10;
            digits.unshift(lastDigit);
            digit = digit / 10;
            digit = parseInt(digit);
        }
        weightedSum = digits.reduce((sum, el, j, arr)=>{
            return sum + el * (j + 1);
        }, 0);
        return weightedSum;
    });
    return result;
};

function testResult(data){
return data;
}
