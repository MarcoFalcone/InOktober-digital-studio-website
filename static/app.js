console.log("%c Website developed by Marco Falcone: https://marcofalcone.dev ", "color: slategrey; font-size: 1rem");

//loader//
$(window).on('load', function(){
  $('.loader').fadeOut(1000);
  $('.content').addClass('showcontent');
});

//fade out page//
jQuery('.work1, .work2, .work3, .backhome, .backhome2').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  jQuery('body').fadeOut(newpage);
});

function newpage() {
  window.location = newLocation;
}

//reload page on backbutton//
$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
    window.location.reload();
  }
});

//hide anchor-link on the url on mobile and smoothscroll//
$(document).ready(function(){
  $('#anchor1').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#txt").offset().top - 0
    }, 600);
  });
  $('#anchor2').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#mail").offset().top - 0
    }, 600);
  });
});

//hide for about and contact//
$(document).ready(function(){
  $(".about").hover(function() {
    $(".workscont").addClass("hideworks")
    $(".abouttxt").addClass("showabout")
  }, function() {
    $(".workscont").removeClass("hideworks")
    $(".abouttxt").removeClass("showabout");
  })
  $(".contact").hover(function() {
    $(".workscont").addClass("hideworks")
  }, function() {
    $(".workscont").removeClass("hideworks")
  })
});

//show title and transform//
$(document).ready(function(){
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
});

//reload when changing orientation on mobile//
$(window).bind('orientationchange', function(event) {
  location.reload(true);
});
