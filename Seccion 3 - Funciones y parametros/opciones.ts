

const opcionales = (nombre:string, apellido:string, edad?:number)=>{

    if(edad){
        console.log(`se llama ${nombre},su apellido es ${apellido} su edad es ${edad}`);
        return       
    }
    console.log(`se llama ${nombre},su apellido es ${apellido}`);

 
}

opcionales('Elvis','Michael',15);