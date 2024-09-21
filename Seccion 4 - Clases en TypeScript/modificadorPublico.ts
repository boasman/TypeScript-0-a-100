class Animal{
     nombre:string
     tamano:string

     constructor(_nombre:string, _tamano:string){
        this.nombre = _nombre;
        this.tamano =_tamano;
     }

     moverse(): void{
        console.log('Me estoy moviendo');
     }
}