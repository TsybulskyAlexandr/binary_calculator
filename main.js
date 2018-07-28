window.addEventListener("DOMContentLoaded", function(event) {
  /*document.forms['1decimalToBinary'].onsubmit = function(){    
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
  document.forms['1binaryToDecimal'].onsubmit = function(){
  	event.preventDefault();
  	resultOut('');
  	var number = document.getElementById("binaryNumber").value;
	if(number == '') return resultOut("Поле ввода не должно быть пустым");
	if(!number.match(/^\d+$/)) return resultOut("Поле должно содержать только цифры");	
	if(number.match(/[^01]+$/)) return resultOut("Введите число в двоично представлении");
	numberLength = number.length;
	index = 0;
	power = numberLength-1;	
	var decimalNumber = 0;	
	while (index < numberLength) {
		decimalNumber += (number[index]) * (Math.pow(2,power));		
		index++;
		power--;
	}
	return resultOut(decimalNumber);
  }
  function resultOut(string) {
	//return this.getElementsByClassName('result_out')[0].innerHTML = string;
  }*/
  
  function getNumber (event){
  	event.preventDefault();
  	console.log(this);
  }

});