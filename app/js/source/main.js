(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mul').click(mul);
    $('#div').click(div);
    $('#exp').click(exp);
    $('#root').click(root);
    $('#fac').click(fac);
  }

  function add(){
    var values = getNums();
    var answer = values[0] + values[1];
    display(answer);
  }

  function sub(){
    var values = getNums();
    var answer = values[0] - values[1];
    display(answer);
  }

  function mul(){
    var values = getNums();
    var answer = values[0] * values[1];
    display(answer);
  }

  function div(){
    var values = getNums();
    var answer = values[0] / values[1];
    display(answer);
  }

  function exp(){
    var values = getNums();
    var answer = Math.pow(values[0], values[1]);
    display(answer);
  }

  function root(){
    var values = getNums();
    var answer = Math.sqrt(values[2]);
    display2(answer);
  }

  function fac(){
    var values = getNums();
    var value = values[2];
    var limit = value;
    for(var i = 1; i<limit; i++){
      value *= i;
    }
    display2(value);
  }

  function getNums(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    var z = $('#num3').val() * 1;
    return [x, y, z];
  }

  function display(answer){
    $('#answer').text(answer);
  }

  function display2(answer2){
    $('#answer2').text(answer2);
  }
})();
