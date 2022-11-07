var ultimaHora = new Date();
var hora;

window.onload = function() {
    //console.log('+[window.onload]');
    // Do nothing now
    const url = 'https://criptoya.com/api/dolar';

    

    function contenido() {


        let respuesta = new XMLHttpRequest();

        respuesta.open('GET', url);

        //console.log(respuesta.readyState);

        respuesta.onreadystatechange = function() {

            if (respuesta.readyState === XMLHttpRequest.DONE) {

                   
                    let respuestaJson = JSON.parse(this.responseText);
                    //console.log(respuestaJson);
                    document.getElementById('oficial').innerText = respuestaJson.oficial;
                    document.getElementById('blue').innerText = respuestaJson.blue;
                    var hora =new Date();
                    var cadena=formatoHora(hora.getHours()) + ":" + formatoHora(hora.getMinutes()) + ":" + formatoHora(hora.getSeconds())
                    document.getElementById('hora').innerText = "Actualizado " + cadena ;
                    guardarHora(cadena);
            }
        };
        
       respuesta.send();
        
        /* try {
        	 respuesta.send();
        }catch(x){
        	document.getElementById('hora').innerText = "Ultima actualizacion: " + localStorage.getItem(hora) + "\nConexión no disponible.";
        }
       */
        
    }

    function formatoHora(hora) {
        if (hora < 10) {
            return "0" + hora;
        } else {
            return hora;
        }
    }



    contenido();

};

function offline(){
	document.getElementById('hora').innerText = "Ultima actualizacion: " + localStorage.getItem(hora) + "\nConexión no disponible.";
};

function guardarHora(valor){
	localStorage.setItem(hora,valor);
	console.log(localStorage.getItem(hora));
}