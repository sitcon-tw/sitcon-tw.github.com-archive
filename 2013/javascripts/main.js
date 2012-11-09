(function() {

  $(document).ready(function() {
    $("#mainMenu a").click(function(e) {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 100
      }, {
        druation: 3000,
        easing: "easeInOutQuad"
      });
      return e.preventDefault();
    });
    return $("#mainMenu li").each(function(index, value) {
      return $(value).bind("activate", function() {
        $("#mainMenu li a").each(function(index, value) {
          return $($(value).attr("href")).fadeTo('fast', 0.5);
        });
        return $($(value).children("a").attr("href")).fadeTo('fast', 1);
      });
    });
  });

  $(window).scroll(function(e) {
    var curTop, fixHeight, resetHeight;
    curTop = $(this).scrollTop();
    resetHeight = $(this).height() / 2 - 300;
    fixHeight = $(this).height() / 2 - curTop;
    if (fixHeight > 0) {
      return $("#timeline").css({
        top: fixHeight
      });
    } else {
      return $("#timeline").css({
        top: 0
      });
    }
  });

  $(window).resize(function(e) {
    var curTop, fixHeight, resetHeight;
    curTop = $(this).scrollTop();
    resetHeight = $(this).height() / 2 - 300;
    fixHeight = $(this).height() / 2 - curTop;
    if (fixHeight > 0) {
      return $("#timeline").css({
        top: fixHeight
      });
    } else {
      return $("#timeline").css({
        top: 0
      });
    }
  });

}).call(this);
