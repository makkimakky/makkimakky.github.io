$(document).ready(function(){
    $('#menu_button').on('click',function(){
      $('#menu').slideToggle();
    });
  });

  //ページ頭に戻る処理
  $(document).ready(function() {
      $("#page-top a").click(function() {
        $('html,body').animate({
            scrollTop: 0
          }, '2200');
        return false;
      });
    });
