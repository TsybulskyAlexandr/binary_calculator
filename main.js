window.addEventListener("DOMContentLoaded", function(event) {
  document.forms['decimalToBinary'].onsubmit = function(){    
	event.preventDefault();  
	resultOut('');
	var number = document.getElementById("decimalNumber").value;      
	if(number == '') return resultOut("Поле ввода не должно быть пустым");
	if(!number.match(/^\d+$/)) return resultOut("Поле должно содержать только цифры");
	var binaryNumber = '';
	var modulo = null;
	var val = null;
	while (number !== 0) {
	  modulo = number % 2;      
	  number = Math.floor(number / 2);
	  binaryNumber +=  modulo;
	}
	binaryNumber = binaryNumber.split("").reverse().join("");
	return resultOut(binaryNumber);
  }  
  document.forms['binaryToDecimal'].onsubmit = function(){
  	event.preventDefault();
  	resultOut('');
  	var number = document.getElementById("binaryNumber").value;
	if(number == '') return resultOut("Поле ввода не должно быть пустым");
	if(!number.match(/^\d+$/)) return resultOut("Поле должно содержать только цифры");
	if(number < 0 || number > 1) return resultOut("Введите число в двоично представлении");
  }
  function resultOut(string) {
	return document.getElementById('binaryToDecimal').getElementsByClassName('result_out')[0].innerHTML = string;
  }
});