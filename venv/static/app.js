//fadepage//
jQuery('.work1, .work2, .work3, .backhome, .backhome2').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  jQuery('body').fadeOut('slow', newpage);
});
function newpage() {
  window.location = newLocation;
}

//reloadpage//
$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
    window.location.reload();
  }
});

//hideanchorlinkurl and smoothscrool//
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
},function(){
  $(".workscont").removeClass("hideworks")
})
