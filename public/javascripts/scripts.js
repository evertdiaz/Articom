
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
           name: data[1],
           mainCat: perf,
           categories: JSON.stringify($skills),
           bio: data[2],
           web: data[3],
           type: data[4]
        }
  console.log(sendInfo)
  $.post('/api/user', sendInfo, function(data, textStatus, jqXHR) {
  	if(textStatus) {
  		alert('Gracias por registrarte')
  		location.href = '/creativos'
  	} 
  		else alert('Error de conexion')

  })
})

$('#reg-startup').on('click', function() {
  var $data = $('#registro input')
  var data = $.map($data, obj => obj.value)
  var sendInfo = {
           name: data[0],
           photos: data[1],
           type: 'publico',
           bio: data[2],
           height: data[3],
           width: data[4],
           owner: data[5],
           ubicacion: data[6]
        }

    $.post('/api/space', sendInfo, function(data, textStatus, jqXHR) {
      if(textStatus) {
        alert('Gracias por registrar un nuevo espacio!')
        location.href = '/espacios'
      } 
        else alert('Error de conexion')

    })
})

$('#reg-evento').on('click', function() {
  var $data = $('#registro input[type="text"]')
  var perf = $('#registro select').val()
  var data = $.map($data, obj => obj.value)
  var $skills = $(':checkbox:checked').map(function() {
      return this.value;
    }).get()

  var sendInfo = {
           name: data[0],
           bio: data[1],
           mainCat: perf,
           categories: JSON.stringify($skills),
           host: data[2],
           members: data[3],
           link: data[4],
           space: data[5]
        }
  console.log(sendInfo)
  $.post('/api/event', sendInfo, function(data, textStatus, jqXHR) {
    if(textStatus) {
      alert('Gracias por crear un evento!')
      location.href = '/eventos'
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