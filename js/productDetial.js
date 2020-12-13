function animate(obj, target, callback) {
  // console.log(callback);  callback = function() {}  调用的时候 callback()

  // 先清除以前的定时器，只保留当前的一个定时器执行
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
  
  
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      // 停止动画 本质是停止定时器
      clearInterval(obj.timer);
      // 回调函数写到定时器结束里面
      callback && callback();
    }
 
    obj.style.left = obj.offsetLeft + step + 'px';

  }, 15);
}
window.addEventListener('load', function () {
  // 获取元素
  var arrow_l = document.querySelector('.arrow-l');
  var arrow_r = document.querySelector('.arrow-r');
  var focus = document.querySelector('.focus');
  var focusWidth = focus.offsetWidth;
  // 鼠标经过focus 就显示隐藏左右按钮
  focus.addEventListener('mouseenter', function () {
    clearInterval(timer);
    timer = null; // 清除定时器变量
  });
  focus.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
      //手动调用点击事件
      arrow_r.click();
    }, 2000);
  });
  var ul = focus.querySelector('ul');

  // 克隆放到ul 最后面
  var first = ul.children[0].cloneNode(true);
  var second = ul.children[1].cloneNode(true);
  var three = ul.children[2].cloneNode(true);
  var four = ul.children[3].cloneNode(true);
  ul.appendChild(first);
  ul.appendChild(second);
  ul.appendChild(three);
  ul.appendChild(four);
  // 点击右侧按钮， 图片滚动一张
  var num = 0;
  var circle = 0;
  // flag 节流阀
  var flag = true;
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = false; // 关闭节流阀
      // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
      if (num > ul.children.length/5) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        flag = true; // 打开节流阀
      });
    }
  });

  // 左侧按钮做法
  arrow_l.addEventListener('click', function () {
    console.log(num);
    if (flag) {
      flag = false;
      if (num <= 0) {
        num = ul.children.length - 5;
        ul.style.left = -num * focusWidth + 'px';
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
    }
  });

  // 自动播放轮播图
  var timer = setInterval(function () {
    //手动调用点击事件
    arrow_r.click();
  }, 2000);
 // 点击轮播图片放大镜图片跟着变化
  $('.currentImg').click(function(){
    let that = $(this)
    $('.glass-image').attr({'src':that.attr('src')})
    $('.show-image').attr({'src':that.attr('src')})
  })

})