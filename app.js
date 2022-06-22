let valor = parseFloat(prompt("Ingrese un numero"))
alert("usted ingreso $" + valor)
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3,6,12,24)"))
if ((cuotas === 3) || (cuotas === 6) || (cuotas === 12) || (cuotas === 24)){
    alert("Usted selecciono " + cuotas + " cuotas")
} else {
    alert("Seleccione un numero de cuotas correcto")
}

function operacion(){
    let impuesto = valor * 0.50
    let valorI = valor + impuesto
    let valorFinal = valorI / cuotas
    return alert("El valor final de cada cuota con impuestos de exterior incluidos son $"+ valorFinal)
}

operacion()