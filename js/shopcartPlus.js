/**
 * 购物车功能 JS
 * 2020-12-19 by huanghuan
 */
$(function () {
  //把那个类型的的input分别先获取
  var $theadInput = $('thead input[type=checkbox]')  //表头中的全选框
  var $tbodyInputs = $('tbody input[type=checkbox]') //表格中的每一行的选择框
  var $totalPriceInput = $('.totalPrice input[type=checkbox]') // 计算总价中的全选框

  /* 全选 */

  // 表头的全选
  $theadInput.change(function () {
    var checkState = $(this).prop('checked');
    $tbodyInputs.prop('checked', checkState);
    $totalPriceInput.prop('checked', checkState);

    allTotal(); //总计
  })

  // 计算总价的全选
  $totalPriceInput.change(function () {
    var checkState = $(this).prop('checked');
    $theadInput.prop('checked', checkState);
    $tbodyInputs.prop('checked', checkState);

    allTotal(); //总计
  })

  $tbodyInputs.change(function () {
    var flag = true;
    $tbodyInputs.each(function (index, input) {
      var checkState = $(this).prop('checked');
      if (!checkState) {
        flag = false
      }
    })
    $theadInput.prop('checked', flag);
    $totalPriceInput.prop('checked', flag);

    allTotal(); //总计
  })

  // 加法功能
  $('.add').click(function () {
    var count = parseInt($(this).next().val());
    count++;
    $(this).next().val(count);
    //小计
    subTotal($(this), count);
    allTotal(); //总计
  })

  // 减法功能
  $('.reduce').click(function () {
    var count = parseInt($(this).prev().val());
    count--;
    count = count < 1 ? 1 : count;
    $(this).prev().val(count);
    //小计
    subTotal($(this), count);
    allTotal(); //总计
  })

  // 小计函数

  function subTotal(dom, count) {
    var singlePrice = parseFloat(dom.closest('tr').find('.price').text());
    var subTotalPrice = singlePrice * count;
    dom.closest('tr').find('.subprice').text(subTotalPrice.toFixed(2))
  }

  // 全部总价

  function allTotal() {
    var allPrice = 0;
    var selectedCount = 0;

    $('tbody input[type=checkbox]').each(function () {
      var checkState = $(this).prop('checked');
      if (checkState) {
        allPrice += parseFloat($(this).closest('tr').find('.subprice').text());
        selectedCount++;
      }
    })
    $('.total').text(allPrice.toFixed(2));
    $('.count').text(selectedCount);
  }

  // 删除
  $('.del').click(function () {
    $(this).closest('tr').remove();
    getGoodsCount(); // 重新计算商品数量
    allTotal(); //总计
  })

  // 删除选中
  $('.deleteChecked').click(function () {
    $('tbody input[type=checkbox]').each(function () {
      var checkState = $(this).prop('checked');
      if (checkState) {
        $(this).closest('tr').remove()
      }
    })
    getGoodsCount(); // 重新计算商品数量
    allTotal(); //总计
  })

  // 获取全部商品函数
  function getGoodsCount() {
    var goodsCount = $('table tr').length;
    $('.goodsCount').text(goodsCount);
  }
  getGoodsCount();
})