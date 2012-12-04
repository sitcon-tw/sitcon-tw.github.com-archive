(function() {
  var slider_banner;

  slider_banner = function() {
    var current, featured, next;
    featured = $("#featured_list");
    current = featured.children(":visible:last");
    featured.children().hide();
    next = $(current[0]).next();
    if (next[0]) {
      return $(current[0]).next().fadeIn('slow');
    } else {
      return $(featured.children(":first")).fadeIn('slow');
    }
  };

  $(document).ready(function() {
    slider_banner();
    return setInterval(slider_banner, 5000);
  });

}).call(this);
