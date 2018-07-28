window.addEventListener("DOMContentLoaded", function(event) {
  document.forms['decimalToBinary'].onsubmit = function(){    
    event.preventDefault();
    document.getElementsByClassName('result_out')[0].innerHTML = "";
    var number = document.getElementById("decimalNumber").value;      
    if(number == '') return document.getElementsByClassName('result_out')[0].innerHTML = "Поле ввода не должно быть пустым";
    if(!number.match(/^\d+$/)) return document.getElementsByClassName('result_out')[0].innerHTML = "Поле должно содержать только цифры";
    var binaryNumber = '0';
    var modulo = null;
    var val = null;
    while (number != 0) {      
      modulo = number % 2;      
      number = Math.floor(number / 2);
      binaryNumber +=  modulo;      
    }
    binaryNumber = binaryNumber.split("").reverse().join("");
    return document.getElementById("decimalToBinary").getElementsByClassName('result_out')[0].innerHTML = binaryNumber;
  }
});