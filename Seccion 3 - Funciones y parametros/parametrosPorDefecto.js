var mostrarPorDefecto = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 10; }
    return "Se llama ".concat(nombre, " se apellida ").concat(apellido, " y tiene ").concat(edad);
};
console.log(mostrarPorDefecto("Manuel", 'Paulino', 25));
console.log(mostrarPorDefecto("Manuel", 'Paulino'));
