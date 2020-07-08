//l标题hover事件
var hot = document.getElementById("hot_ul").getElementsByTagName("li");
//盒子
var divs = document.getElementsByClassName("main_jiadian");

for(var i = 0; i < hot.length; i++) {

	hot[i].index = i;

	hot[i].onmouseover = function() {
		for(var j = 0; j < hot.length; j++) {
			hot[j].className = "";
		}
		this.className = "hot";

		for(var k = 0; k < divs.length; k++) {
			divs[k].style.display = "none";
			//				console.log(divs[k].length)
		}
		divs[this.index].style.display = "block";
	}

}



//轮播图

var ols = document.getElementsByClassName("xiao")[0].children;
var ul = document.getElementsByClassName("box_main")[0].children[3];
var l = document.getElementsByClassName("l")[0];
var r = document.getElementsByClassName("r")[0];
var lis = ul.children;
var num = 0;
//console.log(ul.style.left)

for (var i =0;i<ols.length;i++) {
	ols[i].index=i;
//	console.log(ols[i].index)
	if (i==0) {
		ols[i].className="yuan";
	}
	
	ols[i].onclick=function(){
		
		for (var j=0;j<ols.length;j++) {
			ols[j].className="";
		}
		this.className="yuan";
//		console.log(this.index)
		animate(ul,{"left":-this.index*1226})
		num = this.index;
	}
}

//右按钮
r.onclick = function() {

	num == 4 ? num = 4 : num++;
	for(var j = 0; j < ols.length; j++) {
		ols[j].className = "";
	}
	ols[num].className = "yuan";

	if(num > 4) {
		ul.style.left = "-4904px";
	}
	animate(ul,{"left":-num*1226})
}

//左按钮
l.onclick = function() {

	num == 0 ? num = 0 : num--;
	for(var j = 0; j < ols.length; j++) {
		ols[j].className = "";
	}
	ols[num].className = "yuan";

	if(num < 0) {
		ul.style.left = "0px";
	}
	animate(ul,{"left":-num*1226})
}

//轮播图


//下拉列表
$(function(){

	$(".dao_main #an #text").focus(function(){
		$(this).addClass("txt").next().addClass("txt").next().hide().next().hide()
	}).blur(function(){
		$(this).removeClass("txt").next().removeClass("txt").next().show().next().show();
	})
	
})
