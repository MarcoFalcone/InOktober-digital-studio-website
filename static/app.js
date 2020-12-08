//fadeoutpage//
jQuery('.work1, .work2, .work3, .backhome, .backhome2').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  jQuery('body').fadeOut(newpage);
});

function newpage() {
  window.location = newLocation;
}

//reloadpageonbackbutton//
$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
    window.location.reload();
  }
});

//hide anchor-link on the url on mobile and smoothscroll//
$('.down1').click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $("#txt").offset().top - 0
  }, 600);
});
$('.down2').click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $("#form").offset().top - 0
  }, 600);
});

//hideforaboutandcontact//
$(".about").hover(function() {
  $(".workscont").addClass("hideworks")
  $(".abouttxt").addClass("showabout")
}, function() {
  $(".workscont").removeClass("hideworks")
  $(".abouttxt").removeClass("showabout");
})
$(".contact").hover(function() {
  $(".workscont").addClass("hideworks")
  $(".contactform").addClass("pointerevent") //if pointer quickly hovers again on the form it interrupts the fade out because of the .8s transition, this fixes that making a clean fade out//
}, function() {
  $(".workscont").removeClass("hideworks")
})
$(".contactform").hover(function() {}, function() {
  $(".contactform").removeClass("pointerevent")
})

//show title and transform//
$(".work1").hover(function() {
  $(".collabs").addClass("fadein")
  $(".first").addClass("transform")
}, function() {
  $(".collabs").removeClass("fadein");
  $(".first").removeClass("transform");
})
$(".work2").hover(function() {
  $(".interiors").addClass("fadein")
  $(".second").addClass("transform")
}, function() {
  $(".interiors").removeClass("fadein");
  $(".second").removeClass("transform");
})
$(".work3").hover(function() {
  $(".artwork").addClass("fadein")
  $(".third").addClass("transform")
}, function() {
  $(".artwork").removeClass("fadein");
  $(".third").removeClass("transform");
})

//reload when changing orientation on mobile//
$(window).bind('orientationchange', function(event) {
  location.reload(true);
});
