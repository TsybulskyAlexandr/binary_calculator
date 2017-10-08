window.onload = function() {
  var button_click = document.querySelector('#button_click');
  var myElem = document.createElement("p");
  function getDecimalNumber() {
    var decNum = document.querySelector('#decimal_number');
    var arr = [];
    var val = decNum.value;
    while (val != 0) {
      var remain = val % 2;
      val = Math.floor(val / 2);
      arr.push(remain);
    }
    arr.reverse();
    var str = arr.join("");
    var result = +str;
      myElem.innerHTML = result;
      test.appendChild(myElem);
    }
  button_click.addEventListener("click", getDecimalNumber);
}
