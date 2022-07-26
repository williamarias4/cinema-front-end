
import { debounce } from '/assets/js/throttle.js'

export default function load_nav_toggle(){
(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(/*debounce*/(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    }));
    $("html").click(/*debounce*/(function () {
      $(".nav-dropdown").hide();
    }));
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(/*debounce*/(function () {
      $("nav ul").slideToggle();
    }));
    $("#nav-toggle").on("click", /*debounce*/(function () {
      this.classList.toggle("active");
    }));
  });
})(jQuery);
}