$(function () {
  var $theadInput = $('table thead input[type=checkbox]');
  var $bodyInput = $('table tbody input[type=checkbox]');
  var $allPriceInput = $('.totalPrice input[type=checkbox]');

  $theadInput.change(function () {
    var state = $(this).prop('checked');
    $bodyInput.prop('checked', state);
    $allPriceInput.prop('checked', state);
  })
  $allPriceInput.change(function () {
    var state = $(this).prop('checked');
    $bodyInput.prop('checked', state);
    $theadInput.prop('checked', state);
  })
  $bodyInput.change(function () {
    var flag = true;
    var totalPrice = 0;
    $bodyInput.each(function (i, input) {
      if (!$(input).prop('checked')) {
        flag = false;
      } else {
        totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
      }
    })
    $theadInput.prop('checked', flag)
    $allPriceInput.prop('checked', flag)
    $('.total').text(totalPrice.toFixed(2))
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
  })

  $('.reduce').on('click', function () {
    var $prevInput = $(this).prev();
    var oldVal = parseInt($prevInput.val());
    oldVal--;
    oldVal = oldVal < 1 ? 1 : oldVal;
    $prevInput.val(oldVal);
    subTotalPrice(oldVal, $(this));
  })

  function subTotalPrice(val, dom) {
    var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
    dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
  }

  $('.del').click(function () {
    $(this).closest('tr').remove();
  })

  $bodyInput.each(function (i, input) {
    var totalPrice = 0;
    if ($(input).prop('checked')) {
      totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
    }
  })

})