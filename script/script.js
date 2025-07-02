$(document).ready(function(){
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    if ($('#name').val() && $('#email').val() && $('#message').val()) {
      alert('Formulario enviado');
    } else {
      alert('Completa todos los campos');
    }
  });

  $('#openModal').on('click', function(){ 
    $('#modal').show(); 
    });
  $('.close').on('click', function(){ 
    $('#modal').hide(); 
    });
  $('#test').on('submit', function(e){ 
    e.preventDefault(); 
    alert('Test enviado'); 
    $('#modal').hide(); 
    });
});