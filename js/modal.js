// 注册（1）获取元素

var clearBtn2 = document.getElementById('close');
// (2)点击事件的发生//
function displayBtn2() {
  register_mark.style.display = "block";
}
clearBtn2.onclick = function () {
  console.log(this);
  register_mark.style.display = "none";
}