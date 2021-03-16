var name ="Sam";
alert("FUCK " + name);

var name = "水壺";
var age = 25;
var isBoy = true;
var fruits = ["apple","banana","cat"]

alert(name);
alert(age);
alert(isBoy);
alert(fruits [1]);

function addition(num){
	return num+9;
}

var age = 25;
var trueage = addition(age);
alert(trueage);

var age2 = 3000;
var trueage2 = addition(age2);
alert(trueage2);

function test(){
	a = 123;
	var b = 456
	if (a == 123) var c = 956545466531;
}
//alert(c);

document.getElementById("byid").innerHTML = "我來自小海";
document.getElementById("byid").style.color = "blue";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自狗猴";
document.getElementsByClassName("byclass")[0].style.fontSize = "30px";

document.getElementsByTagName("div")[2].innerHTML = "我來自老海";
document.getElementsByTagName("div")[2].style.fontFamily = "微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML="qeronvijqernbunqe"
document.getElementsByTagName("p")[0].style.color="red"
document.getElementsByTagName("p")[0].style.fontFamily="Helvetica"