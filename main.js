function decimalToBinary (_this, number){
	var binaryNumber = '';
	var modulo = null;
	var val = null;
	while (number !== 0) {
	  modulo = number % 2;      
	  number = Math.floor(number / 2);
	  binaryNumber +=  modulo;
	}
	binaryNumber = binaryNumber.split("").reverse().join("");
	return resultOut(_this, binaryNumber);
}

function binaryToDecimal(_this ,number){
	numberLength = number.length;
	index = 0;
	power = numberLength-1;	
	var decimalNumber = 0;	
	while (index < numberLength) {
		decimalNumber += (number[index]) * (Math.pow(2,power));		
		index++;
		power--;
	}
	return resultOut(_this, decimalNumber);
}

function resultOut(_this, string) {	
	return _this.getElementsByClassName('result_out')[0].innerHTML = string;	
}

window.addEventListener("DOMContentLoaded", function(event) {
  var forms = document.getElementsByClassName("form");
  var formHandler = function formHandler(event) { 
  	event.preventDefault();
  	var _this = this;
    resultOut(_this, '');
    var number = _this.querySelector('input[name="number"]').value;
    if(number == '') return resultOut(_this, "Поле ввода не должно быть пустым");
	if(!number.match(/^\d+$/)) return resultOut(_this, "Поле должно содержать только цифры");
	if(_this.id == "binaryToDecimal"){
		if(number.match(/[^01]+$/)) return resultOut(_this, "Введите число в двоично представлении");
	}
	(_this.id == "binaryToDecimal") ? binaryToDecimal(_this, number) : decimalToBinary(_this, number);
  };  
  Object.keys(forms).forEach(function(key) {
    forms[key].onsubmit = formHandler;    
  });
});