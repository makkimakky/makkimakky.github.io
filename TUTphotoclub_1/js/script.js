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
        images: ['img/_DSC0941.JPG','img/_DSC1009.JPG','img/_DSC1549.JPG'],
        effect: "fade",
        easing: "swing",  // 切り替える背景画像を指定
    });
});// http://bashalog.c-brains.jp/14/07/17-095900.php

$(function($) {
    $('.bg-slider_top').bgSwitcher({
        images: ['img/_DSC0941.JPG','img/_DSC1009.JPG','img/_DSC1549.JPG'],
        effect: "fade",
        easing: "swing",  // 切り替える背景画像を指定
    });
});// http://bashalog.c-brains.jp/14/07/17-095900.php

// $(window).resize(function(){
//     var x = $(window).width();
//     var y = 640;
//     if (x <= y) {
//         $('body').removeClass('bg-slider');
//     }else{
//         $('body').addClass('bg-slider')
//     }
// });
