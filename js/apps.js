const cotizadorPasaje = new CalculadorPasaje(destino, pasajes, tipoClase, comida);

//selectDestino.innerHTML += cargoDestino();
//selectPasajes.innerHTML += cargoTickets();
//selectClase.innerHTML += cargoTipoClase();
//selectComida.innerHTML += cargoComida();

btnCalcular.addEventListener("click", ()=> cotizarPasaje());
btnRefrescar.addEventListener("click", ()=> location.reload());
document.addEventListener("keydown", checkOut);

/*--AJAX - FETCH()--*/

function request(){ 
    fetch("json/parametros.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.destino);
        selectDestino.innerHTML += cargoDestino(data.destino);
        selectPasajes.innerHTML += cargoTickets(data.pasajes);
        selectClase.innerHTML += cargoTipoClase(data.tipoClase);
        selectComida.innerHTML += cargoComida(data.comida);
    })
}