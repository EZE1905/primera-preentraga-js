//! PRIMERA PRE ENTREGA
//? Calcular pagos en cuotas sobre un monto determinado. 

// function costoDeCuotas () {
//     let monto;

//     do {
//         monto = parseFloat(prompt("Ingrese el monto que quiera calcular en cuotas ($), o ingrese 0 para salir: "));
        
//         if (monto !== 0) {
//             let cuotas = parseInt(prompt("INGRESE LA CANTIDAD DE CUOTAS EN LA QUE DESEA PAGAR: 12 CON INTERES, 9 CON INTERES, 6 CON INTERES, 3 SIN INTERES"));

//             let cuotaMensual;

//             if (cuotas === 12 || cuotas === 9 || cuotas === 6 || cuotas === 3) {
//                 cuotaMensual = monto  / cuotas;
//                 alert("El precio de la cuota por " + cuotas + " meses es de: $" + cuotaMensual.toFixed(2));
//             } else {
//                 alert("Ingrese una opción válida.");
//             }
//         }
//     } while(monto !== 0);
// }

// Llamada a la función
// costoDeCuotas();

//! SEGUNDA PRE ENTREGA
//? Calcular pagos en cuotas sobre un monto determinado agregando intereses y un resumen de cuotas totales.

//* Funcion para sacar porcentaje de interes
function sacarPorcentaje(monto, porcentaje, cuotas, cuotasArray) {

    // Calcula el valor del porcentaje y el monto con el porcentaje
    let valorPorcentaje = (monto * porcentaje) / 100;
    let montoConPorcentaje = monto + valorPorcentaje;

    // Muestra el monto original, el porcentaje y el monto con el porcentaje
    alert("Monto original: $" + monto.toFixed(2) + "\nInterés: " + porcentaje + "%\nMonto con Interés: $" + montoConPorcentaje.toFixed(2));

    // Calcula la cuota mensual
    let cuotaMensual = montoConPorcentaje / cuotas;

    // Muestra el precio de la cuota mensual
    alert("El precio de la cuota por " + cuotas + " meses es de: $" + cuotaMensual.toFixed(2));
    
    // Agrega la cuota mensual al array
    cuotasArray.push(`Cuota por ${cuotas} meses: $${cuotaMensual.toFixed(2)}`);
}


function costoDeCuotas() {
    let monto;
    let cuotasArray = []; // Array para almacenar las cuotas mensuales

    do {

        monto = parseFloat(prompt("Ingrese el monto que quiera calcular en cuotas ($), o ingrese 0 para salir: "));

        if (monto !== 0) {

            let cuotas = parseInt(prompt("INGRESE LA CANTIDAD DE CUOTAS EN LA QUE DESEA PAGAR: 12 CON INTERES, 9 CON INTERES, 6 CON INTERES, 3 SIN INTERES"));

            if (cuotas === 12){

                sacarPorcentaje(monto, 60, 12, cuotasArray)

            }else if(cuotas === 9){
                
                sacarPorcentaje(monto, 40, 9, cuotasArray)
            
            }else if(cuotas === 6){
            
                sacarPorcentaje(monto, 20, 6, cuotasArray)

            }else if(cuotas === 3){
            
                sacarPorcentaje(monto, 0, 3, cuotasArray)

            }else {
                alert("Ingrese una opción válida.");
            }
        }
    } while (monto !== 0);

    // Mostrar todas las cuotas calculadas
    if (cuotasArray.length > 0) {
        alert("Resumen de cuotas calculadas:\n" + cuotasArray.join("\n"));
    }
}

// Llamada a la función
costoDeCuotas();
