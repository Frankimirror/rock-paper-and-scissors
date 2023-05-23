$(document).ready(function(){
    // Agregar un desplazamiento suave a los enlaces anclados
    $('a[href^="#"]').on('click', function(event) {
  
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });