document.addEventListener('DOMContentLoaded', function(){
  var title = "#12 Modulo and time difference";
  console.log('---- Task ' + title + ' ----');

  //var inputData = prompt();
  var inputData = "3 1 0 0 0 2 3 4 5 5 3 23 22 24 4 20 45 8 4 6 47 9 11 51 13";
  window.InputDataHelper.showInputData(inputData);
  var data = window.InputDataHelper.parseInputData(inputData, { oneDataCount: 8 });
  var result = performTask12(data);
  window.InputDataHelper.showResult(result);
  window.InputDataHelper.showTestResult(testResult(data));
  window.InputDataHelper.showAnswer(result);
});

function performTask12(data){
    var result = data.arr.map(function(item, i, arr){
    var day1 = item[0];
    var hour1 = item[1];
    var min1 = item[2];
    var sec1 = item[3];
    var day2 = item[4];
    var hour2 = item[5];
    var min2 = item[6];
    var sec2 = item[7];

    var secInMinute = 60;
    var secInHour = secInMinute * 60;
    var secInDay = secInHour * 24;

    var secondsFromMonthStart1 = (day1 * secInDay) + (hour1 * secInHour) + (min1 * secInMinute) + sec1;
    var secondsFromMonthStart2 = (day2 * secInDay) + (hour2 * secInHour) + (min2 * secInMinute) + sec2;

    var diffSeconds = secondsFromMonthStart2 - secondsFromMonthStart1;
    var days = diffSeconds / secInDay;
    days = parseInt(days);
    var hours = (diffSeconds - days * secInDay) / secInHour;
    hours = parseInt(hours);
    var mins = (diffSeconds - days * secInDay - hours * secInHour) / secInMinute;
    mins = parseInt(mins);
    var secs = (diffSeconds - days * secInDay - hours * secInHour - mins * secInMinute);

    return [days, hours, mins, secs];
  });
  return result;
};

function testResult(data){
return data;
}
