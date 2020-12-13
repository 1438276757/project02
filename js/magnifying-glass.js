
let maxLeft = $('.glass-box').innerWidth() - $('.mask').innerWidth();
let maxTop = $('.glass-box').innerHeight() - $('.mask').innerHeight();
$('.glass-box').mouseenter(function(){
  $('.show-image-box').show()
})
$('.glass-box').mouseleave(function(){
  $('.show-image-box').hide()
})
$('.mask').mousedown(function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let thisX = $(this).offset().left;
  let thisY = $(this).offset().top;
  $(this).on('mousemove', function (event) {
    $(this).offset({
      top: event.clientY - (mouseY - thisY),
      left: event.clientX - (mouseX - thisX)
    });

    $(this).position().left < 0 && $(this).css({
      left: 0
    });
    $(this).position().left > maxLeft && $(this).css({
      left: maxLeft
    });
    $(this).position().top < 0 && $(this).css({
      top: 0
    });
    $(this).position().top > maxTop && $(this).css({
      top: maxTop
    });

    $('.show-image').css({
      left: -parseInt($('.mask').css('left')) * 5
    })
    $('.show-image').css({
      top: -parseInt($('.mask').css('top')) * 5
    })

  })
})
$(document).mouseup(function () {
  $('.mask').off('mousemove')
})
$(document).on('dragstart', () => false)
