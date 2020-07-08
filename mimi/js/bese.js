//获取对象
//id 获取 document.getElementByid()  $("#con");
//class 获取 document.getElementsByClassName()  $(".con")
//标签 获取  document.getElementsByTagName()  $("div");

//document封装
//function $(str) {
//	var s = str.substr(0, 1);
//	var ss = str.substr(1);
//	switch(s) {
//		case "#":
//			return document.getElementById(ss)
//			break;
//		case ".":
//			return getClass(ss)
//			break;
//		default:
//			return document.getElementsByTagName(str)
//	}
//}

//class兼容
function getClass(classname) {
	//如果有方法名，兼容ie 6 7 8
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	}

	var con = document.getElementsByTagName("*");

	var arr = [];
	//循环所有标签
	for(var i = 0; i < con.length; i++) {
		//li
		//con aa bb 
		var sql = con[i].className.split(" "); //数组
		//字符串切割后的数组
		for(var j = 0; j < sql.length; j++) {

			if(sql[j] == classname) {
				arr.push(con[i]);
			}

		}

	}
	return arr;

}

//scroll家族封装 滚动条事件
function scroll() {

	if(window.pageYOffset != null) {
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		};
	}

	if(document.compatMode == "CSS1Compat") {
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		}
	}

	return {
		top: document.body.scrollTop,
		left: document.body.scrollLeft
	}

}
 
//client封装 宽高兼容
function client() {

	if(window.innerHeight != null) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

	if(document.compatMode === "CSS1Compat") {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}

	//怪异浏览器
	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}

}


// 解决拖动选中文字方案
function removeAllRange(){
	window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
}

// 封装两个隐藏与显示方法

function show(obj) {
	obj.style.display = "block";
}

function hide(obj) {
	obj.style.display = "none";
}

//匀速运动灵活版
//function animate(obj, target) {
//	clearInterval(obj.timer);
//	var speed = obj.offsetLeft < target ? 10 : -10;
//
//	obj.timer = setInterval(function() {
//
//		var result = target - obj.offsetLeft; //的之间差值 -200
//		obj.style.left = obj.offsetLeft + speed + "px";
//		//Math.abs() 绝对值 -100 100 
//		if(Math.abs(result) <= 10) {
//			clearInterval(obj.timer);
//
//			//直接跳到目标位置
//			obj.style.left = target + "px"; //10个像素差值
//		}
//
//	}, 20)
//}

//obj 运动对象
//target运动参数
function animate(obj, json) {
	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		var flag = true
		for(attr in json) {

			var current = parseInt(getStyle(obj, attr));

			var step = (json[attr] - current) / 10;

			step = step > 0 ? Math.ceil(step) : Math.floor(step);

			obj.style[attr] = current + step + "px";

			if(json[attr] != current) {
				flag = false;
			}

		}
		if(flag) {
			clearInterval(obj.timer);
			
		}

	}, 20)

}

//样式兼容写法
function getStyle(obj, attr) {
	if(obj.currentStyle) { //判断ie
		return obj.currentStyle[attr]; //返回兼容写法
	} else {
		return window.getComputedStyle(obj, null)[attr]; //w3c 浏览器
	}
}