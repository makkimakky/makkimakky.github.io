$(document).ready(function() {
    $('.fadein_navigation').fadeIn(3000);
});

$(document).ready(function(){
    $('#menu_button').on('click',function(){
      $('#nav_hontai').slideToggle();
    });
  });

$(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['img/DSC0941.JPG','img/DSC1009.JPG','img/DSC1549.JPG'],
        effect: "fade",
        easing: "swing",  // 切り替える背景画像を指定
    });
});//test
