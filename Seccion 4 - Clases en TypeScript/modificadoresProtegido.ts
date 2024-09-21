class Padre{
    protected nombre:string

    constructor(nombre_:string){
        this.nombre = nombre_;
    }
}


class hijo extends Padre{

    public apellido:string 

    constructor(nombre_:string, apellido_:string){
        super(nombre_,)
        this.apellido = apellido_;
    }

    mostrarNombre():void{
        console.log(this.    nombre);
    }    
}

const obj = new hijo('Manuel','Paulino');
//obj.nombre = 'Elvis'; // solo se accede desde la clase padre y sus clase derivada;