window.onload = function() {
    console.log('+[window.onload]');
    // Do nothing now
    const url = 'https://criptoya.com/api/dolar';

    

        let respuesta = new XMLHttpRequest();
        respuesta.open('GET', url);

        respuesta.onreadystatechange = function() {

            if (respuesta.readyState === XMLHttpRequest.DONE) {

                let respuestaJson = JSON.parse(this.responseText);
                console.log(respuestaJson);
                document.getElementById('oficial').innerText = respuestaJson.oficial;
                document.getElementById('blue').innerText = respuestaJson.blue;
                var date = new Date();
                document.getElementById('hora').innerText = "Actualizado " + formatoHora(date.getHours()) + ":" + formatoHora(date.getMinutes()) + ":" + formatoHora(date.getSeconds());
            }
        };
        respuesta.send();

    

    function formatoHora(hora) {
        if (hora < 10) {
            return "0" + hora;
        } else {
            return hora;
        }
    }

   
    


};

