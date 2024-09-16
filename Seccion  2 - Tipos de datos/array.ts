// let numeros = [];

let numeros:number[] = [1,5,2,4,];
let nombres:string[] = ['Manuel','Pedrito','Martha'];

let coleccionesnumero: Array<string> = ['Pedro','Martha']

for(let numero of numeros){

    console.log(numero);
}
console.log('----------------------------');
for(let nombre of nombres){
    console.log(nombre);
}
console.log('----------------------------');
for(const collecion of coleccionesnumero){
    console.log(collecion);
}