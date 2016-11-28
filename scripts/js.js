//Desktop
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 40.397657, lng: 111.879861},
    zoom: 18
  });
}


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

//TODO
//nav menu disappears on scroll.
//nav menu disappears when touched outside of menu.

//nav menu option blue for page (desktop)
$(".facebook").mouseenter(
  function() {
    $(this).css("display", "none");
    $(".facebook-blue").css("display", "flex");
  }
);
$(".facebook-blue").mouseleave(
  function() {
    $(this).css("display", "none");
    $(".facebook").css("display", "flex");
}
);
$(".instagram").mouseenter(
  function() {
    $(this).css("display", "none");
    $(".instagram-blue").css("display", "flex");
  }
);
$(".instagram-blue").mouseleave(
  function() {
    $(this).css("display", "none");
    $(".instagram").css("display", "flex");
  }
);
$(".google-plus").mouseenter(
  function() {
    $(this).css("display", "none");
    $(".google-blue").css("display", "flex");
  }
);
$(".google-blue").mouseleave(
  function() {
    $(this).css("display", "none");
    $(".google-plus").css("display", "flex");
  }
);