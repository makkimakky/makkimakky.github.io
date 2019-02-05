$(function(){
  $('#masonry').masonry({
	   itemSelector: '.grid, .grid_tate2, grid_yoko2',
     columnWidth: 80,
      isFitWidth: true,
	    isAnimated: true
    });
});

(function($){

	$(function(){
		simpleModalWindow();
	});

	function simpleModalWindow(){

		var sp = 500;	//アニメーション速度
		var win = $(window);
		var body = $('body');
		var bg = $('<div id="modal-bg"></div>');
		bg.css('opacity', '0');

		//モーダルウィンドウ表示クリックイベント
		$(document).on('click', '.modal', function(){
			var py = win.scrollTop();
			var wh = win.height();
			var self = $(this);
			var link = self.attr('href');
			var check = link.match(/^#.+/);
			var mWin = $('<div id="modal-win"><div id="modal-win-inner"></div></div>');
			var mInner = mWin.find('#modal-win-inner');
			mInner.css('opacity', '0');
			body.append(mWin);
			mWin.prepend(bg);
			if(!check){
				mInner.append('<img src="' + link + '" alt="" />');
				var img = mWin.find('img');
				img.on('load', function(){
					view(img);
				});
			}
			else {
				var contents = $(link);
				mInner.append(contents);
				contents.css({display: 'block', zIndex: '101'});
				view(contents);
			}
			function view(a_elm){
				var w = a_elm.outerWidth();
				var h = a_elm.outerHeight();
				var mt = (wh - h) / 2 + py;
				bg.animate({opacity: '.75'}, sp);
				mWin.css('top', mt + 'px');
				mInner.css({width: w, height: h}).animate({opacity: '1'}, sp);
			}
			return false;
		});

		//モーダルウィンドウ内要素変更クリックイベント
		$(document).on('click', '.modal-move', function(){
			var py = win.scrollTop();
			var wh = win.height();
			var self = $(this);
			var link = self.attr('href');
			var check = link.match(/^#.+/i);
			var mWin = $('#modal-win');
			var mInner = mWin.find('#modal-win-inner');
			if(check){
				mInner.animate({opacity: '0'}, sp, function(){
					var nowContents = $(this).children();
					body.append(nowContents);
					nowContents.hide();
					var contents = $(link);
					mInner.append(contents);
					contents.css({display: 'block', zIndex: '101'});
					var w = contents.outerWidth();
					var h = contents.outerHeight();
					var mt = (wh - h) / 2 + py;
					bg.animate({opacity: '.75'}, sp);
					mWin.css('top', mt + 'px');
					mInner.css({width: w, height: h}).animate({opacity: '1'}, sp);
				});
			}
			return false;
		});

		//モーダルウィンドウクローズクリックイベント
		$(document).on('click', '#modal-bg, .modal-close', function(){
			var mWin = $('#modal-win');
			var mInner = mWin.find('#modal-win-inner');
			var contents = mInner.children();
			mInner.animate({opacity: '0'}, sp, function(){
				if(contents.attr("id")){
					body.append(contents);
					contents.hide();
				}
				mWin.remove();
			});
			bg.animate({opacity: '0'}, sp);
			return false;
		});

	}

})(jQuery);


(function() {
  var ripple, ripples, RippleEffect,loc, cover, coversize, style, x, y, i, num;

  //クラス名rippleの要素を取得
  ripples = document.querySelectorAll('.ripple');

  //位置を取得
  RippleEffect = function(e) {
  ripple = this;//クリックされたボタンを取得
 	cover = document.createElement('span');//span作る
 	coversize = ripple.offsetWidth;//要素の幅を取得
  loc = ripple.getBoundingClientRect();//絶対座標の取得
  x = e.pageX - loc.left - window.pageXOffset - (coversize / 2);
  y = e.pageY - loc.top - window.pageYOffset - (coversize / 2);
  pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;';

  //spanを追加
  ripple.appendChild(cover);
  cover.setAttribute('style', pos);
  cover.setAttribute('class', 'rp-effect');//クラス名追加

  //しばらくしたらspanを削除
  setTimeout(function() {
    var list = document.getElementsByClassName( "rp-effect" ) ;
    for(var i =list.length-1;i>=0; i--){//末尾から順にすべて削除
    	list[i].parentNode.removeChild(list[i]);
  }}, 2000)};
  for (i = 0, num = ripples.length; i < num; i++) {
    ripple = ripples[i];
    ripple.addEventListener('mousedown', RippleEffect);
  }
}());
