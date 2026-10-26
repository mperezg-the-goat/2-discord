function crearSaludador(saludo) {
                    return function(nombre) {
                                    return saludo + ', ' + nombre + '!';
                          }
                 }
 
               const saludarEnEspanol = crearSaludador('Hola');
               const saludarEnIngles = crearSaludador('Hello');
               const saludarEnFrances = crearSaludador('Bonjour');
 
               console.log(saludarEnEspanol('Ana'));  // "Hola, Ana!"
               console.log(saludarEnIngles('John'));  // "Hello, John!"
               console.log(saludarEnFrances('Marie')); // "Bonjour, Marie!"