var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("se llama ".concat(nombre, ",su apellido es ").concat(apellido, " su edad es ").concat(edad));
        return;
    }
    console.log("se llama ".concat(nombre, ",su apellido es ").concat(apellido));
};
opcionales('Elvis', 'Michael', 15);
