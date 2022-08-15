function obtenerHora(){
    let fechaActual = new Date();
    // console.log(fechaActual)
    // console.log(fechaActual.getDate());
    // console.log(fechaActual.getDay());
    // console.log(fechaActual.getMonth());
    // console.log(fechaActual.getFullYear());
    
    
    let diaSemanas= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let meses= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    //  console.log(diaSemanas[fechaActual.getDay()]);
    //  console.log( meses[fechaActual.getMonth()]);
    
     let parrafoFecha = document.querySelector('#fecha');
     
     parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()} `
     
     let parrafoHora = document.querySelector('#hora');
     let minutos=fechaActual.getMinutes();
     if (minutos<10){
        minutos= '0'+minutos
     }
     let hora= fechaActual.getHours();
     if(hora<10){
        hora= '0'+hora
     }
     let segundos = fechaActual.getSeconds();
     if(segundos<10){
        segundos='0'+segundos
     }
     let sufijo = 'am';
     if(hora>12){
        hora=hora-12;
        sufijo = 'pm';
     }
     parrafoHora.innerHTML = `${hora}:${minutos}:${segundos} ${sufijo}`

}

setInterval(obtenerHora,1000);

function cambiarRosa(){
    let boton= document.querySelector('#reloj');
   boton.className= 'titulo fondoRosa'
}
function cambiarVerde(){
    let boton= document.querySelector('#reloj');
   boton.className= 'titulo fondoVerde'
}
function cambiarLila(){
    let boton= document.querySelector('#reloj');
   boton.className= 'titulo fondoLila'
}