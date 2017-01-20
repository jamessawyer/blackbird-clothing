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
  })
})
