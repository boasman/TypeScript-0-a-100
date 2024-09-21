class padre{

    nombre:string
    apellido:string
    
    constructor(_nombre:string, _apellido:string){
        this.nombre =_nombre;
        this.apellido=_apellido;
    }

    mostrarNombre(){
        console.log(`el nombre es ${this.nombre} ${this.apellido}`)
    }
}


class Hijo extends padre{
    edad:number
    constructor(_nombre:string, _apellido:string, _edad:number){
        super(_nombre, _apellido)
        this.edad =  _edad;

    }

    mostrarNombreHijo():void{
        const hijo = new Hijo('Elvis','Michael',45);
        console.log(hijo.apellido);
    }
}