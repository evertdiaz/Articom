$('document').ready(function() {
  var dat = []
  var j = 0
  // Llenar Datos en la tabla
  $.get('http://api.datosabiertos.msi.gob.pe/api/v2/datastreams/INFOR-DE-CALLE-PARQU/data.json/?auth_key=7c24845589d8e83508881ecd675e62251f5ceea9&limit=10', function(data) {
    for(var i=6;i<data.result.fArray.length;i++){

	dat[j] = data.result.fArray[i].fStr
	i+=4
	j++
	}
    var len = dat.length
    var txt = ""
    if(len > 0){
        for(var i=0;i<len;i++){
            txt += `

            <div class="col-sm-12 col-md-6" style="height:100%;align:middle;text-align:center">
	<div style='margin:10% 20%;border-radius:20px;background:#EEE;display:inline-block;margin-left:100px'>
		<div class="col-sm-6">
			<img src="https://media-cdn.tripadvisor.com/media/photo-s/02/3a/7d/63/parque-kennedy.jpg" style='height:150px;width:150px;border-radius:100%'>
		</div>
		<div class="col-sm-6">
			<br>
			<p>${dat[i]}</p>
		</div>
	</div>

</div>

            `
            $('#muniespacios').append(txt)
        }
        
    }
})

})