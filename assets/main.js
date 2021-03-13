// utilizzo la funzione .ready per essere sicuro di far eseguire il codice dopo il caricamento del DOM
$(document).ready(function(){
  hover() ;

})

function hover() {
  var feature = $('.position-relative');
  var element_nav = $('nav ul li a');
  var lista = $('.dropdown ul li');
    feature.mouseenter(function(){
      feature = $(this).children('.dropdown').removeClass('none').addClass('active');
    })
    feature.mouseleave(function(){
      feature = $(this).children('.dropdown').removeClass('active').addClass('none');
    })
    lista.mouseenter(function(){
      lista= $(this).children('a').css('color','black');

    })
    lista.mouseleave(function(){
      lista = $(this).children('a').css('color','#7F8081');
    })
    element_nav.mouseenter(function(){
      element_nav= $(this).css('color','black');

    })
    element_nav.mouseleave(function(){
      element_nav = $(this).css('color','#7F8081');
    })

}
