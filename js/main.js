//? Calcular pagos en cuotas sobre un monto determinado.

function costoDeCuotas () {
    let monto;

    do {
        monto = parseFloat(prompt("Ingrese el monto que quiera calcular en cuotas ($), o ingrese 0 para salir: "));
        
        if (monto !== 0) {
            let cuotas = parseInt(prompt("INGRESE LA CANTIDAD DE CUOTAS EN LA QUE DESEA PAGAR: 12, 9, 6, 3"));

            let cuotaMensual;

            if (cuotas === 12 || cuotas === 9 || cuotas === 6 || cuotas === 3) {
                cuotaMensual = monto  / cuotas;
                alert("El precio de la cuota por " + cuotas + " meses es de: $" + cuotaMensual.toFixed(2));
            } else {
                alert("Ingrese una opción válida.");
            }
        }
    } while(monto !== 0);
}

// Llamada a la función
costoDeCuotas();
