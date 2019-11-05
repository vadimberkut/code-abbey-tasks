document.addEventListener('DOMContentLoaded', function(){
  var title = "#10 Linear Function";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "2 0 0 1 1 1 0 0 1";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 4 });
  var result = performTask10(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask10(data){
  var result = data.arr.map(function(item, i, arr){
    //y(x) = ax + b
    var x1 = item[0];
    var y1 = item[1];
    var x2 = item[2];
    var y2 = item[3];

    var a = ((y1 - y2)/(x1 - x2));
    var b = y2 - a*x2;
    return [a, b];
  });
  return result;
};

function testResult(data){
return data;
}