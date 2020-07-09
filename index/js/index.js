

var lis = document.querySelectorAll(".outList > li");
var lisBtn = document.querySelector('.listBtn a');
var lisUl = document.querySelector('.listBtn ul')
var lisBool = false;
lis.forEach(function (element, index) {
    element.onmouseover = function () {
        var img = this.querySelector('img');
        var name = img.dataset.name;
        img.src = "./index/img/"+ name +"_h.png";
    }
    element.onmouseout = function () {
        var img = this.querySelector('img');
        var name = img.dataset.name;
        img.src = "./index/img/"+ name +".png";
    }
})

lisBtn.onclick = function () {
    console.log("xxx")
    if (!lisBool) {
        lisUl.style.height = "152px";
        lisBool = true;
    }else{
        lisUl.style.height = "0";
        lisBool = false;
    }
    
    // this.querySelector('ul').style.display = "block";
}