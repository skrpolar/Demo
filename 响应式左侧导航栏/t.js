// function Animal(){
// 	this.name = "Animal";
// 	this.showName = function(){
// 		alert(this.name);
// 	}
// }
// function Cat(){
// 	this.name = "Cat";
// }
// var animal = new Animal();
// var cat = new Cat();
// animal.showName.call(cat);
//

// function car(){
//   var obj = Object.create(car.prototype);
//   return obj;
// }
// var amy = car();

// function food(num,price){
//   this.num = num;
//   this.price = price;
//
//   if(price > 10){
//     console.log("this food price is more than 10");
//   }
// }
//
// function apple(num,price){
//   this.name = "apple";
//   food.call(this,num,price);
// }
//
// var a_apple = new apple(5,15);

// function T(c) {
// 	this.id = "Object";
// 	this.dom = document.getElementById("scroll");
// }
// T.prototype = {
// 	init: function() {
// 	   //①
// 		this.dom.onmouseover = function() {
// 			console.log("Over-->"+this.id);
// 		}
// 	   //②
// 		this.dom.onmouseout = function() {
// 			console.log("Out -->"+this.id);
// 		} .bind(this)
// 	}
// };
// (new T()).init();
// var div_1 = document.getElementById("div1");
// var body = document.getElementsByTagName("body");
// div_1.style.backgroundColor = "red";
// div_1.style.height = "100px";
// div_1.style.width = "100px";
