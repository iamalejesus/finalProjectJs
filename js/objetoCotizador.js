class CalculadorPasaje {
    constructor (jsonD, jsonT, jsonTC, jsonC, valorInicial) {
        this.arrayDestino = jsonD
        this.arrayTicket = jsonT
        this.arrayTipoClase = jsonTC
        this.arrayComida = jsonC
        this.valorInicial = valorInicial
    }
    valorDePasaje(valorInicial, factorDestino, factorTicket, factorTipoClase, factorComida) {
        
        const valorDePasajeFinal = valorInicial * factorDestino * factorTicket * factorTipoClase * factorComida
                return valorDePasajeFinal.toFixed(2)
    }
}