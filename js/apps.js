const cotizadorPasaje = new CalculadorPasaje(destino, pasajes, tipoClase, comida);

selectDestino.innerHTML += cargoDestino();
selectPasajes.innerHTML += cargoTickets();
selectClase.innerHTML += cargoTipoClase();
selectComida.innerHTML += cargoComida();

btnCalcular.addEventListener("click", ()=> cotizarPasaje());
btnRefrescar.addEventListener("click", ()=> location.reload());
