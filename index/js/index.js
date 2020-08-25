

// 获取元素
var lis = document.querySelectorAll(".outList > li");
var lisBtn = document.querySelector('.listBtn a');
var lisUl = document.querySelector('.listBtn ul');
var BTN = document.querySelector('.BTN');
var index = document.querySelector('.index');
var lisBool = false; // 展开列表开关
var BTNbool = false; // 按钮旋转开关

// 左侧导航列表图标变色
lis.forEach(function (element, index) {
    element.onmouseover = function () {
        var img = this.querySelector('img');
        var name = img.dataset.name;
        img.src = "./index/img/" + name + "_h.png";
    }
    element.onmouseout = function () {
        var img = this.querySelector('img');
        var name = img.dataset.name;
        img.src = "./index/img/" + name + ".png";
    }
})

// 左侧 “我的作品” 展开列表
lisBtn.onclick = function () {
    // console.log("xxx")
    if (!lisBool) {
        lisUl.style.height = "152px";
        lisBool = true;
    } else {
        lisUl.style.height = "0";
        lisBool = false;
    }
}

// 展开导航栏按钮
BTN.onclick = function () {
    if (!BTNbool) {
        this.style.transform = "rotate(-360deg)";
        document.querySelector('.leftBox').style.flex = "none";
        document.querySelector('.listBox').style.opacity = '0';
        BTNbool = true;
    } else {
        this.style.transform = "rotate(450deg)";
        document.querySelector('.leftBox').style.flex = "2";
        document.querySelector('.listBox').style.opacity = '1';
        BTNbool = false;
    }
}

// 模拟滚动条函数
function bar() {
    // 动态计算滑动条 获取元素
    // var rightBox = document.querySelector('.rightBox');
    var bigbox = document.querySelector('.bigbox');
    var textBox = bigbox.querySelector('.textBox');
    var sclBox = document.querySelector('.sclBox');
    var bar = document.querySelector('.bar');

    // 计算滑块高度
    var navHeight = bigbox.offsetHeight * sclBox.offsetHeight / textBox.offsetHeight;
    bar.style.height = navHeight + 'px';

    // 窗口变化
    window.onresize = function () {
        // 计算滑块高度
        var navHeight = bigbox.offsetHeight * sclBox.offsetHeight / textBox.offsetHeight;
        bar.style.height = navHeight + 'px';
    }

    // 右侧自定义滚动条点击滚动事件
    bar.onmousedown = function (event) {
        document.onmousemove = function (event) {
            var ratio = bigbox.offsetHeight / bar.offsetHeight; // 比值
            var navTop = event.pageY - bar.offsetHeight / 2;
            bigbox.scrollTop = navTop * ratio;
            // console.log(ratio)
            // if (navTop <= 0) {
            //     navTop = 0;
            // } else if (navTop >= sclBox.offsetHeight - bar.offsetHeight) {
            //     navTop = sclBox.offsetHeight - bar.offsetHeight;
            // }
            // bar.style.top = navTop + 'px';
            // var textTop = navTop * textBox.offsetHeight / sclBox.offsetHeight;
            // textBox.style.top = -textTop + 'px';
            // console.log(bar.style.top)
        }
    }
    // 文档监听鼠标松开
    document.onmouseup = function () {
        document.onmousemove = null;
    }

    // 监听bigbox的鼠标滚动事件
    bigbox.addEventListener('scroll', function (event) {
        var bigTop = event.target.scrollTop;
        var barTop = bigTop * sclBox.offsetHeight / textBox.offsetHeight;
        bar.style.top = barTop + 'px';
    })
}

// “我的作品” tab 选项卡
var lis = document.querySelectorAll('.listBtn ul li');
var boxs = document.querySelectorAll('.bigbox');

// 添加点击事件
lis.forEach(function (element, index) {
    element.onclick = function () {
        for (var i = 0; i < boxs.length; i++) {
            boxs[i].style.display = 'none';
            boxs[i].className = '';
        }
        boxs[index].style.display = 'block';
        boxs[index].classList = 'bigbox';
        bar();
    }
})

// 其他项 tab 选项卡
var likeLi = document.querySelectorAll('.like');
var likes = document.querySelectorAll('.likeBox');

// "首页" 选项点击事件
index.onclick = function () {
    
}

// “一点惊喜” “心籁邮件” 选项点击事件
likeLi.forEach(function (element, index) {
    element.onclick = function () {
        console.log(index)
        for (var i = 0; i < boxs.length; i++) { 
            boxs[i].style.display = 'none';
            boxs[i].className = '';
        }
        for (var j = 0; j < likes.length; j++) {
            likes[j].style.display = 'none';
            likes[j].className = '';
        }
        likes[index].style.display = 'block';
        likes[index].classList = 'bigbox';
        bar();
    }
})