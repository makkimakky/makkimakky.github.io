
//contentフェードイン処理

$(function(){
    $('#content').hide();
    $('#content').fadeIn(1500);
});


//ページ頭に戻る処理
$(function() {
      $("#page-top a").click(function() {
          $('html,body').animate({
              scrollTop: 0
          }, '2200');
          return false;
      });
  });
