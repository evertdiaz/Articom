
$('#envio-reg').on('click', function() {
	var $data = $('#registro input[type="text"]')
  var psw = $('#registro input[type="password"]').val()
  var perf = $('#registro select').val()
	var data = $.map($data, obj => obj.value)
  var $skills = $(':checkbox:checked').map(function() {
      return this.value;
    }).get()

	var sendInfo = {
           username: data[0],
           password: psw,
           nombres: data[1],
           perfil: perf,
           bio: data[2],
           skills: JSON.stringify($skills),
           phone: data[3],
           mail: data[4]
        }
  console.log(sendInfo)
  $.post('/api/register', sendInfo, function(data, textStatus, jqXHR) {
  	if(textStatus) {
  		alert('Gracias por registrarte')
  		location.href = '/emprendedores'
  	} 
  		else alert('Error de conexion')

  })
})

$('#reg-startup').on('click', function() {
  var $data = $('#registro input')
  var data = $.map($data, obj => obj.value)
  var sendInfo = {
           nombre: data[0],
           rubro: data[1],
           resumen: data[2],
           descripcion: data[3],
           nivel: data[4],
           perfiles: data[5],
           mail: data[6]
        }

    $.post('/api/project', sendInfo, function(data, textStatus, jqXHR) {
      if(textStatus) {
        alert('Gracias por registrar una nueva Startup')
        location.href = '/startups'
      } 
        else alert('Error de conexion')

    })
})

$('#login-btn').click(function() {
  $('#registro').css('display','none')
  $('#login-form').css('display','block')
})
$('#register-btn').click(function() {
  $('#registro').css('display','block')
  $('#login-form').css('display','none')
})