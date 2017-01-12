$(document).ready(function(){
$(window).scrollTop(0);
$('body').vegas({
  overlay: false,
  loop: true,
  transition: 'fade',
  transitionDuration: 4000,
  delay: 10000,
  animation: 'random',
  animationDuration: 20000,
  slides: [
    { src: '/images/neolith-kitchen.jpg' },
    { src: '/images/neolith-project01.jpg' },
    { src: '/images/neolith-projects01.jpg'},
    { src: '/images/neolith-projects04.jpg'}
  ]
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('.launch-modal').click(function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
    $('#neolith-intro')[0].src = "https://www.youtube.com/embed/UChRmT6n9WY?modestbranding=1&controls=0&showinfo=0&autoplay=1";
});
$('.close').click(function(e){
  e.preventDefault();
  $('#neolith-intro').attr('src', '');
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if( scroll > 12 ) {
    $('.nav-right').addClass('nav-right-dark');
  } else {
    $('.nav-right').removeClass('nav-right-dark');
  }
});

$('#lightgallery').lightGallery({
    thumbnail:true
});


});
