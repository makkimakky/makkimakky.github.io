$('#secondcontent').hide();
  $(function(){
    /* 1.ロゴからコンテンツへの切替*/
      var firstImg = $('#firstimg');
      var secondCon = $('#secondcontent');
      firstImg.hide().fadeIn(800, function(){
        setTimeout(function() {
          firstImg.fadeOut(600);
        }, 2000);
      });
      setTimeout(function(){
        secondCon.fadeIn(600);
      }, 3400);
    });

    $(function(){
    	$('.cord').click(function(){
    		$(this).next('pre').slideToggle();
    	});
    });

    $(function(){
      $('.cord_button').click(function(){
        $(this).next('pre').slideToggle();
      });
    });
