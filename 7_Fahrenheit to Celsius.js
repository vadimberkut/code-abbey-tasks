document.addEventListener('DOMContentLoaded', function(){
  var title = "#7 Fahrenheit to Celsius";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "5 495 353 168 -39 22 37 294 530 557 562 166 71 511 413 138 543 88 502 266 179 278 367 262 559 357 121 67 159 154 100 428 573 468 526 198 126 369 460 55 325 422 189 365";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 1 });
  var result = performTask(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask(data){
  var celsiusScale = [0, 100];
  var fahrenheitScale = [32, 212];
  var fahrenheitLength = fahrenheitScale[1] - fahrenheitScale[0];
  var celsiusLength = celsiusScale[1] - celsiusScale[0];
  var result = data.arr.map(function(item, i, arr){
    var fahrenheit = item[0];
    var celsius = (fahrenheit - fahrenheitScale[0]) / ( fahrenheitLength / celsiusLength );
    return Math.round(celsius);
  });
  return result;
};

function testResult(data){
  var result = data.arr.map(function(item, i, arr){
    return Math.round((item[0] - 32) * (5/9) );
  });
  return result;
}