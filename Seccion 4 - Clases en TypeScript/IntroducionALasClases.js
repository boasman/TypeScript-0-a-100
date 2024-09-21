var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_,
            this.puerta = puertas_,
            this.fecha = this.fecha;
    }
    Vehiculo.prototype.aceletar = function () {
        console.log('Acelerando');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('frenando');
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Toyota', '20/08/2024', 4);
console.log(coche.marca);
console.log(coche.fecha);
console.log(coche.puerta);
console.log(coche.frenar());
console.log(coche.aceletar());
coche.marca = 'Nueva marca';
console.log(coche.marca);
