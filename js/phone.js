/**
 * Created by huweijian on 2018/1/30.
 * @title
 */
$(function () {
  $('.nav').click(function () {
    var f = $('#nav').hasClass('show')
    if (f) {
      $('#nav').removeClass('show')
    } else {
      $('#nav').addClass('show')
    }
  })
})
