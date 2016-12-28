//Mobile
$(".mobile-nav").click(function() {
  $(".mobile-nav-menu").css("display", "flex");
  $(".mobile-nav").css("display", "none");
  $(".mobile-nav-close").css("display", "block");
});

$(".mobile-nav-close").click(function() {
  $(".mobile-nav-menu").css("display", "none");
  $(".mobile-nav-close").css("display", "none");
  $(".mobile-nav").css("display", "flex");
});

