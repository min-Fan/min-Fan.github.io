var img = document.getElementsByClassName("deta_img")[0];
console.log(img)

window.onscroll=function(){
//	console.log(scroll().top);
	if (scroll().top<=237) {
		img.style.position="relative";
		img.style.top = 0+"px";
	}
	if (scroll().top>=237) {
		img.style.position="fixed";
		img.style.top = 32+"px";
	}
	if (scroll().top>=1340) {
		img.style.position="relative";
		img.style.top= 1340 -207 +"px";
	}
	
}



//选择套餐
var li = $(".deta_baobox")[0].children[1].children;
var span = $(".bao_y1");
console.log(span);

for(var i = 0 ;i<li.length;i++){
	li[i].index=i;
li[i].onclick=function(){
	
	this.children[1].children[0].style.background="#FF6700";
	this.children[3].children[2].children[0].style.background="#FF6700";
	span[this.index].style.color="#FF6700";
}

}







