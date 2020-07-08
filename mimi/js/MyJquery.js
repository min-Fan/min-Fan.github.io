//tab选项卡
$.fn.extend({
	"tab": function() {
		$(this).children().click(function() {
			// 选项卡切换
			$(this).addClass("con").siblings().removeClass("con");
			// 获取target名称
			var target = $(this).parent().data("target"); //#mytabs
			// 获取当前位置
			var index = $(this).index();
			// 内容切换
			$(target).children().eq(index).addClass("con").siblings().removeClass("con");
		})
	}
})

$(function(){
	$("[data-toggle='tabs']").tab();
})

//轮播图
$.fn.lunbo = function() {

	var box = $(this); //外边盒子
	var ul = box.find("ul").eq(0); //ul对象
	var picLi = ul.find("li"); //ul 下所有li对象 
	var imgW = picLi.eq(0).width(); //图片宽度
	var index = 1; //标记

	// 前后添加图片
	picLi.first().clone().appendTo(ul); //把第一张图片复制后添加ul后面
	picLi.last().clone().prependTo(ul);

	//ul宽度计算
	ul.css({
		"width": ul.children().length * imgW,
		"left": "-" + imgW + "px"
	})

	//创建小圆点
	var ol = $('<ol></ol>').appendTo(box);
	//$.each(Array,fn) 前面只能是￥，不是对象

	$.each(o = picLi, function(i, el) {
		var className = i == 0 ? "con" : "";
		$("<li class='" + className + "'></li>")
			.appendTo(ol)
			.click(function() {
				//获取下一个图片位置
				index = $(this).index() + 1;
				//动画效果
				ul.stop().animate({
					"left": "-" + index * imgW + "px"
				}, 1000)
				//小圆点背景颜色
				$(this).addClass("con").siblings().removeClass("con");
			})
	});

	var ols = box.find("ol>li"); //ol下li

	//创建左右按钮
	$('<ul id="ul2"><li id="li_l"><div id="l"></div></li><li id="li_r"><div id="r"></div></li></ul>')
		.appendTo(box)
		.find("#li_l")
		.click(function() {
			if(index == 1) {
				ul.css("left", "-" + (picLi.length + 1) * imgW + "px");
				index = picLi.length;
			} else {
				index--;
			}
			//动画效果
			ul.stop().animate({
				"left": "-" + imgW * index + "px"
			}, 1000)
			//小圆点背景
			ols.eq(index - 1).addClass("con").siblings().removeClass("con");
		})
		.next()
		.click(function() {
			if(index == picLi.length) {
				ul.css("left", "0px");
				index = 1;
			} else {
				index++;
			}
			//动画效果
			ul.stop().animate({
				"left": "-" + imgW * index + "px"
			}, 1000)
			//小圆点背景
			ols.eq(index - 1).addClass("con").siblings().removeClass("con");
		})

}