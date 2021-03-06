const cargoDestino = ()=> {
    let optionD
        for (let destiny of destino) {
            optionD += `<option value="${destiny.factor}" id="${destiny.id}">${destiny.dest}</option>`
        }
        return optionD
}

const cargoTickets = ()=> {
    let optionT
        for (let tickets of pasajes) {
            optionT += `<option value="${tickets.factor}" id="${tickets.id}">${tickets.ticket}</option>`
        }
        return optionT
}

const cargoTipoClase = ()=> {
    let optionTC
        for (let clase of tipoClase) {
            optionTC += `<option value="${clase.factor}" id="${clase.id}">${clase.tipo}</option>`
        }
        return optionTC
}

const cargoComida = ()=> {
    let optionC
        for (let food of comida) {
            optionC += `<option value="${food.factor}" id="${food.id}">${food.com}</option>`
        }
        return optionC
}

const faltanCargarDatos = ()=> {
    return (selectDestino.value.trim() == "" || selectPasajes.value.trim() == "" || selectClase.value.trim() == "" || selectComida.value.trim() == "")
}

const realizarCalculo = () => {
    desti = parseFloat(selectDestino.value);
        tick = parseFloat(selectPasajes.value);
        cla = parseFloat(selectClase.value);
        co  = parseFloat(selectComida.value);
        valorDelPasaje = cotizadorPasaje.valorDePasaje(desti, tick, cla, co, 1);
        valorPasaje.innerText = `$ ${valorDelPasaje}`
}

/*const cotizarPasaje = ()=> {
    if (faltanCargarDatos()) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completá todos los datos!',
            background: "#EFFFFD",
            allowOutsideClick: false,
            confirmButtonColor: "#42C2FF",
        })
        return
    } else {
        desti = parseFloat(selectDestino.value);
        tick = parseFloat(selectPasajes.value);
        cla = parseFloat(selectClase.value);
        co  = parseFloat(selectComida.value);
        valorDelPasaje = cotizadorPasaje.valorDePasaje(desti, tick, cla, co, 1);
        valorPasaje.innerText = `$ ${valorDelPasaje}`
    }
}*/

/* SIMPLIFICANDO const cotizarPasaje CON OPERADOR TERNARIO */

const cotizarPasaje = ()=> {
    (faltanCargarDatos()) ?
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completá todos los ítems!',
            background: "#EFFFFD",
            allowOutsideClick: false,
            confirmButtonColor: "#42C2FF",
        }) :
        realizarCalculo ()
}

function checkOut (event){
    const enter = event.keyCode;
    if (enter == 13){
        cotizarPasaje ();
    }
}