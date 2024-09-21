class Vehiculo{
    
    marca:string
    fecha:string
    puerta:number


    constructor(marca_:string, fecha_:string, puertas_:number){

        this.marca = marca_,
        this.puerta = puertas_,
        this.fecha =  this.fecha

    }

    aceletar():void{
        console.log('Acelerando');
    }

    frenar():void{
        console.log('frenando');
    }
}

const coche = new Vehiculo('Toyota','20/08/2024',4);

console.log(coche.marca);
console.log(coche.fecha);
console.log(coche.puerta);
console.log(coche.frenar());
console.log(coche.aceletar());

coche.marca = 'Nueva marca';
console.log(coche.marca);