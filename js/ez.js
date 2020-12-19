/**
 * 产品详情列表交互JS
 */

$(function () {
  // 独家提供轮播
  $('.ez-banner').tyslide({
    boxh: 500,//盒子的高度
    w: 1200,//盒子的宽度
    h: 440,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 20,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 15,//控制按钮宽度
    controlsH: 15,//控制按钮高度
    radius: 10,//控制按钮圆角度数
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
    isShowNum: false //是否显示数字
  });

  $('.ez-banner:gt(0)').hide();

  $('.ez-title ul li').on('mouseenter',function(){
    $(this).addClass('active').siblings().removeClass('active')
    var index = $(this).index();
    $('.ez-banner').eq(index).show().siblings().hide()
  })

  /*换一批*/
  var index = 0;
  $('.change').click(function(){
    index++;
    $('.inner-box').stop(true).animate({
      // top: -index * 500,
      left: -index * 1200
    },function(){
      if(index >= 3){
        index = 0;
        $('.inner-box').css('left', 0);
      }
    })
  })
})