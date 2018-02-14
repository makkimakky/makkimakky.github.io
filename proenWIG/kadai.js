//ページのフェードイン・アウト処理　参考http://raining.bear-life.com/jquery/%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%80%81%E3%83%AA%E3%83%B3%E3%82%AF%E6%99%82%E3%81%AB%E3%83%95%E3%82%A7%E3%83%BC%E3%83%89%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95

$(function(){
    $('#title').hide();
    $('#title').fadeIn(2000);
    $('a').click(function(){
        var url = $(this).attr('href');
        if (url != '') {
            $('#title').fadeOut(1000);
            setTimeout(function(){
                location.href = url;
            }, 1000);
        }
        return false;
    });
});

$(function(){
    $('#sakuhin-setumei').hide();
    $('#sakuhin-setumei').fadeIn(2000);
    $('a').click(function(){
        var url = $(this).attr('href');
        if (url != '') {
            $('#sakuhin-setumei').fadeOut(1000);
            setTimeout(function(){
                location.href = url;
            }, 1000);
        }
        return false;
    });
});


//色取得　テスト https://liginc.co.jp/web/js/other-js/130257
