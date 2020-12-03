//fadeoutpage//
jQuery('.work1, .work2, .work3, .backhome, .backhome2').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  jQuery('body').fadeOut('slow', newpage);
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
$('.down1').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#txt").offset().top - 0
    }, 600);
});
$('.down2').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#form").offset().top - 0
    }, 600);
});

//hideforaboutandcontact//
$(".about").hover(function(){
  $(".workscont").addClass("hideworks")
  $(".abouttxt").addClass("showabout")
},function(){
  $(".workscont").removeClass("hideworks")
  $(".abouttxt").removeClass("showabout");
})
$(".contact").hover(function(){
  $(".workscont").addClass("hideworks")
  $(".contactform").addClass("pointerevent") //if pointer quickly hovers again on the form it interrupts the fade out because of the .8s transition, this fixes that making a clean fade out//
},function(){
  $(".workscont").removeClass("hideworks")
})
$(".contactform").hover(function(){
},function(){
  $(".contactform").removeClass("pointerevent")
})

//reload when changing orientation on mobile//
$(window).bind('orientationchange', function (event) {
    location.reload(true);
});

//prevent the softkeyboard to change layout on android//
var meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width,height='+window.innerHeight+', initial-scale=1.0';
document.getElementsByTagName('head')[0].appendChild(meta);
