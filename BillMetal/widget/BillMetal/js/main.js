window.onload = function() {
  console.log('+[window.onload]');
  // Do nothing now
  const url = 'https://criptoya.com/api/dolar';

  let respuesta= new XMLHttpRequest();
  respuesta.open('GET',url);

  respuesta.onreadystatechange=function(){
     
      if(respuesta.readyState === XMLHttpRequest.DONE){
          
          let respuestaJson= JSON.parse(this.responseText);
          console.log(respuestaJson);
          document.getElementById('oficial').innerText = respuestaJson.oficial;
          document.getElementById('blue').innerText= respuestaJson.blue;
          var date=new Date();
          document.getElementById('hora').innerText= "Actualizado "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
      }
  };
  respuesta.send();
  
  
  
};
