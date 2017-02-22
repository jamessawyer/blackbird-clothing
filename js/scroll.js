$().ready(function() {
  $(window).scroll(function() {
    // 获取滚动的高度
    var wScroll = $(this).scrollTop();

    // logo
    // 除以2, 讲速度变为滚动的一半
    $('.logo').css({
      'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    // back-bird
    $('.back-bird').css({
      'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    // fore-bird
    // 向上滚动
    $('.fore-bird').css({
      'transform': 'translate(0px, -' + wScroll / 40 + '%)'
    })

    // 模特展示效果
    if (wScroll > $(".clothes-pics").offset().top - ($(window).height() / 1.2)) {
      $('.clothes-pics figure').each(function(i) {
        setTimeout(function() {
          $('.clothes-pics figure').eq(i).addClass('is-showing')
        }, 150 * (i + 1))
      })
    }

    // 固定背景图片
    if (wScroll > $('.large-window').offset().top - $(window).height()){
      $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
      var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
      $('.window-modal').css({'opacity': opacity});
    }
  })
})
