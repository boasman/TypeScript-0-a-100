

const mostrarPorDefecto = (nombre:string, apellido:string, edad:number = 10) => {
    return `Se llama ${nombre} se apellida ${apellido} y tiene ${edad}`;
}



console.log(mostrarPorDefecto("Manuel",'Paulino',25));
console.log(mostrarPorDefecto("Manuel",'Paulino'));

