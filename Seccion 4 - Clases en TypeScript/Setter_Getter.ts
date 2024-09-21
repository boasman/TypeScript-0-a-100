let permiso:boolean = true;
class persona{
    public _nombre:string;

    constructor(nombre:string){
        this._nombre = nombre;
    }

 get getNombre():string{
    return this._nombre;

 }

 set setNombre(value:string){
    if(permiso){
        this._nombre = value;
    }
    else{
        console.log("No tiene permiso");
    }
    }
    
    
}