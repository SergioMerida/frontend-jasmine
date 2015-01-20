var titles = "Jasmine";
var num1 = "";
var num2 = "";

function helloWorld() {
  return "hello world";
}

function title() {
	document.write("<h2>" + titles + "</h2>" )
};
title();

function sum(num1, num2) {
	if(isNaN(num1)||isNaN(num2)) {
		return null;
	}else{
		return parseInt(num1) + parseInt(num2);
	};
};
