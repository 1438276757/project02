$(function () {
  var $theadInput = $('table thead input[type=checkbox]');
  var $bodyInput = $('table tbody input[type=checkbox]');
  var $allPriceInput = $('.totalPrice input[type=checkbox]');

  $theadInput.change(function () {
    var state = $(this).prop('checked');
    $bodyInput.prop('checked', state);
    $allPriceInput.prop('checked', state);
    calcTotalPrice()
  })
  $allPriceInput.change(function () {
    var state = $(this).prop('checked');
    $bodyInput.prop('checked', state);
    $theadInput.prop('checked', state);
    calcTotalPrice()
  })
  $bodyInput.change(function () {
    var flag = true;
    
    $bodyInput.each(function (i, input) {
      if (!$(input).prop('checked')) {
        flag = false;
      }
    })
    $theadInput.prop('checked', flag)
    $allPriceInput.prop('checked', flag)
    
    calcTotalPrice()
  })
  $('table thead input[type=checkbox]').change(function () {
    var state = $(this).prop('checked');
    $('table tbody input[type=checkbox], .totalPrice input[type=checkbox]').prop('checked', state);
  })

  $('.totalPrice input[type=checkbox]').change(function () {
    var state = $(this).prop('checked');
    $('table tbody input[type=checkbox], table thead input[type=checkbox]').prop('checked', state);
  })

  $('.add').on('click', function () {
    var $nextInput = $(this).next();
    var oldVal = parseInt($nextInput.val());
    oldVal++;
    $nextInput.val(oldVal);
    subTotalPrice(oldVal, $(this));
    calcTotalPrice()
  })

  $('.reduce').on('click', function () {
    var $prevInput = $(this).prev();
    var oldVal = parseInt($prevInput.val());
    oldVal--;
    oldVal = oldVal < 1 ? 1 : oldVal;
    $prevInput.val(oldVal);
    subTotalPrice(oldVal, $(this));
    calcTotalPrice()
  })

  function subTotalPrice(val, dom) {
    var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
    dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
  }

  $('.del').click(function () {
    $(this).closest('tr').remove();
  })

  // 计算总价函数
  function calcTotalPrice(){
    var count = 0;
    var totalPrice = 0;
    $('table tbody input[type=checkbox]').each(function (i, input) {
      if ($(input).prop('checked')) {
        count++;
        totalPrice += parseFloat($(input).closest('tr').find('.subprice').text());
      }
    })
    console.log(totalPrice);
    $('.total').text(totalPrice.toFixed(2))
    $('.count').text(count)
  }
  function calcGoodCount(){
    $('.goodsCount').text($('table tbody tr').length)
  }
  calcGoodCount()
  
  $('.deleteChecked').on('click',function(){
    $bodyInput.each(function(i,input){
      if($(this).prop('checked')){
        $(this).closest('tr').remove();
      }
    })
    calcTotalPrice()
    calcGoodCount()
  })
})