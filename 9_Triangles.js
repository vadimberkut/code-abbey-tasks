document.addEventListener('DOMContentLoaded', function(){
  var title = "#9 Triangles";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "14 3 4 5 1 2 4 0 1 6 3 0 10 10 11 64 22 0 15 22 4 25 20 8 55 21 4 30 9 16 19 6 10 81 30 13 32 2 11 75 28 6 63";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 3 });
  var result = performTask9(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask9(data){
  var result = data.arr.map(function(item, i, arr){
    var hipotenuse = window.InputDataHelper.arrayMax(item);
    var cathetus = item.filter(function(el) { return el !== hipotenuse });
    var c2 = Math.pow(hipotenuse, 2);
    var a2 = Math.pow(cathetus[0], 2);
    var b2 = Math.pow(cathetus[1], 2);
    return c2 == a2 + b2 ? 1 : 0;
  });
  return result;
};

function testResult(data){
  var result = data.arr.map(function(item, i, arr){
    return Math.round((item[0] - 32) * (5/9) );
  });
  return result;
}