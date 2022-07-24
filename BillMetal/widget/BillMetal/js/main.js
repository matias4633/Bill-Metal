window.onload = function() {
    //console.log('+[window.onload]');
    // Do nothing now
    const url = 'https://criptoya.com/api/dolar';

    var ultimaHora = new Date();
    var hora;

    function contenido() {


        let respuesta = new XMLHttpRequest();

        respuesta.open('GET', url);

        //console.log(respuesta.readyState);

        respuesta.onreadystatechange = function() {

            if (respuesta.readyState === XMLHttpRequest.DONE && respuesta.status===200) {

            	localStorage.setItem(hora, formatoHora(ultimaHora.getHours()) + ":" + formatoHora(ultimaHora.getMinutes()) + ":" + formatoHora(ultimaHora.getSeconds()));
            	let respuestaJson = JSON.parse(this.responseText);
                //console.log(respuestaJson);
                document.getElementById('oficial').innerText = respuestaJson.oficial;
                document.getElementById('blue').innerText = respuestaJson.blue;
              
                document.getElementById('hora').innerText = "Actualizado " + localStorage.getItem(hora);
            }else{
            	document.getElementById('hora').innerText = "Ultima actualizacion: " + localStorage.getItem(hora) + "\nConexión no disponible.";
            }
        };
        respuesta.send();

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

