/**
 * 
 * 乐购商城首页JS
 * 2020-10-28
 */
//当页面加载完毕
$(function(){
$('#banner').tyslide({
    boxh:460,//盒子的高度
    w:1000,//盒子的宽度
    h:390,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:20,//控制按钮高度
    radius:10,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
});
/*图书电子书小轮播 */
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:3,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });


        /*新书列表手风琴效果 */
        $('.ebooks .right-box ul > li').mouseenter(function(){
            //所有兄弟：隐藏详情 显示标题
            $(this).siblings().find('.desc').slideUp();
            $(this).siblings().find('.ebooks-title').slideDown();

            //当前：隐藏标题 显示详情
            $(this).find('.ebooks-title').slideUp(); //隐藏标题
            $(this).find('.desc').slideDown(); //显示详情
        })
        
        /*返回顶部 */
        //绑定滚动事件
        $(document).scroll(function(){
            //获取距离顶部的位置
            var topDistance=$('html, body').scrollTop();
            //判断
            if(topDistance>500){
                $('.backtoTop').fadeIn();
            }else{
                $('.backtoTop').fadeOut();
            }
        })  
        //返回顶部功能
        $('.backtoTop').click(function(){
            $('html, body').animate({
                scrollTop:0
            },300)
        })
/*服装小轮播 */
$('#clothes-banner').tyslide({
    boxh:340,//盒子的高度
    w:400,//盒子的宽度
    h:340,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:3,//控制按钮高度
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});


    /*运动图轮播 */
    $(function(){
      $('#sport-banner').tyslide({
          boxh:340,//盒子的高度
          w:427,//盒子的宽度
          h:340,//图片的高度
          isShow:true,//是否显示控制器
          isShowBtn:true,//是否显示左右按钮
          controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
          controlsW:25,//控制按钮宽度
          controlsH:4,//控制按钮高
          controlsColor:"gray",//普通控制按钮的颜色
          controlsCurrentColor:"white",//当前控制按钮的颜色
      
      });
      })
  
          /*童装图轮播 */
  $(function(){
      $('#kid-banner').tyslide({
          boxh:340,//盒子的高度
          w:427,//盒子的宽度
          h:340,//图片的高度
          isShow:true,//是否显示控制器
          isShowBtn:true,//是否显示左右按钮
          controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
          controlsW:25,//控制按钮宽度
          controlsH:4,//控制按钮高
          controlsColor:"gray",//普通控制按钮的颜色
          controlsCurrentColor:"white",//当前控制按钮的颜色
      
      });
      })
/*推广小轮播 */
$('.promotion-pptbox').tyslide({
  boxh:740,//盒子的高度
  w:1200,//盒子的宽度
  h:740,//图片的高度
  isShow:true,//是否显示控制器
  isShowBtn:true,//是否显示左右按钮
  controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
  controlsW:10,//控制按钮宽度
  controlsH:10,//控制按钮高度
  radius:25,//控制按钮圆角度数
  controlsColor:"#d7d7d7",//普通控制按钮的颜色
  controlsCurrentColor:"#FF6500",//当前控制按钮的颜色
});
$('.promotion-pptbox .controls').css({right: '25px',left: 'auto'})
$('.promotion-pptbox').find('.item-img').css({width: '158px',
  height: '155px'})
})

/**
 * 二维码
 * 鼠标移入展示,反之收起
 */
$('.qr-code .ticket').mouseenter(function(){
   $('.qr-code .code-box').stop().animate({
     left: '-100px'
   })
})
$('.qr-code .ticket').mouseleave(function(){
  $('.qr-code .code-box').stop().animate({
    left: 0
  })
})

/**
 * 顶部搜索栏
 */
$(document).scroll(function(){
  var topDistance = $('html, body').scrollTop();

  if(topDistance > 200) {
    $('.top-search-box').slideDown()
  }else{
    $('.top-search-box').slideUp()
  }
})