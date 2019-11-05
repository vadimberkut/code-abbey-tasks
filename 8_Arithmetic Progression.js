document.addEventListener('DOMContentLoaded', function(){
  var title = "#8 Arithmetic Progression";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "12 0 1 6 3 0 10 10 11 64 22 0 15 22 4 25 20 8 55 21 4 30 9 16 19 6 10 81 30 13 32 2 11 75 28 6 63";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 3 });
  var result = performTask(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask(data){
  var result = data.arr.map(function(item, i, arr){
    var firstEl = item[0];
    var step = item[1];
    var getSumOfFirstElements = item[2];
    var sum = 0;
    for (var i = 0; i < getSumOfFirstElements; i++) {
      sum += firstEl + i*step;
    }
    return sum;
  });
  return result;
};

function testResult(data){
  var result = data.arr.map(function(item, i, arr){
    return Math.round((item[0] - 32) * (5/9) );
  });
  return result;
}