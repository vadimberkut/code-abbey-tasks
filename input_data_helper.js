document.addEventListener("DOMContentLoaded", function(){
  window.InputDataHelper = {

    parseInputData: function (data, params){
      if(params === undefined)
        params = {};
      var countIncluded = params.countIncluded || true;
      var separator = params.separator || ' ';
      var oneDataCount = params.oneDataCount || 2;

      var arr = data.split(separator);
      var parsed = {
        count: 0,
        arr: [] //array of arrays
      };
      
      if(countIncluded){
        parsed.count = +arr[0];
        arr = arr.slice(1, arr.length);
      }

      for (var i = 0; i < arr.length; i+=oneDataCount) {
        parsed.arr.push(arr.slice(i, i + oneDataCount));
      }
      parsed.arr = parsed.arr.map(function(array){ return array.map(function(number){ return +number; }); });
      return parsed;
    },
    showInputData: function (data) {
      console.log('Input data: ', data);
    },
    showResult: function (result) {
      console.log('Result: ', result);
    },
    showTestResult: function (result) {
      console.log('Test result: ', result);
    },
    showAnswer: function (result) {
      console.log('Answer: ', result.join(' '));
    },
    arrayMax: function(arr){
      return arr.reduce(function(max, el, i, arr){
        if(el > max)
          return el;
        return max;
      }, arr[0]);
    }
  };
});