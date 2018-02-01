/**
 * Created by huweijian on 2018/1/30.
 * @title
 */
$(function () {
  $('.nav-li').click(function () {
    $('.nav-li').removeClass('visited')
    $(this).addClass('visited')
  })
})
