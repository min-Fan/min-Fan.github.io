var box = document.getElementsByClassName("top_img")[0];
var ul = box.children[0].children[0];
var ols = box.children[1].children[2].children;
var imgl= $(".img_l")[0];
var imgr= $(".img_r")[0];

console.log(imgl)

var num = 0;

for (var i = 0;i<ols.length;i++) {
	
	if(i==0){
		ols[i].className="con";
	}
	
	ols[i].index=i;
	ols[i].onclick=function(){
		for (var j=0;j<ols.length;j++) {
			ols[j].className="";
		}
		this.className="con";
		animate(ul,{"left":-this.index*1903});
		
		num = this.index;
	}
	
}

//左按钮
imgl.onclick=function(){
	num == 0? num=0 : num--;
	for (var i =0;i<ols.length;i++) {
		ols[i].className="";
	}
	ols[num].className="con";
	
	if (num<0) {
		ul.style.left=0;
	}
	
	animate(ul,{"left":-num*1903});
}
//右按钮
imgr.onclick=function(){
	num == 1? num=1 : num++;
	for (var i =0;i<ols.length;i++) {
		ols[i].className="";
	}
	ols[num].className="con";
	
	if (num>2) {
		ul.style.left="-1903px";
	}
	
	animate(ul,{"left":-num*1903});
}