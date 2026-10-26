//PAra evitar que cambien el saldo de una cuenta bancaria cambiando una variable creamos una closure:
function crearCuentaBancaria(saldoInicial) {
  let saldo = saldoInicial; // Variable protegida, inaccesible desde fuera

  return {
    depositar: function(cantidad) {
      saldo += cantidad;
      return `Depósito con éxito. Saldo actual: ${saldo}€`;
    },
    verSaldo: function() {
      return `Tu saldo es: ${saldo}€`;
    }
  };
}

const miCuenta = crearCuentaBancaria(100);

console.log(miCuenta.verSaldo()); // "Tu saldo es: 100€"
miCuenta.depositar(50);
console.log(miCuenta.verSaldo()); // "Tu saldo es: 150€"

// Intento de "hackear" o alterar la variable directamente:
console.log(miCuenta.saldo); // undefined
miCuenta.saldo = 1000000;    // Crea una propiedad nueva, NO altera el saldo real
console.log(miCuenta.verSaldo()); // "Tu saldo es: 150€" (¡Sigue protegido!)