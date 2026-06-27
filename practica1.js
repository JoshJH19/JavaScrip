let nombre = "Gon";
let nombre1 = "cito";
const mult = 4;
const mult2 = 5;
let num = 0;

for(let i = 0;i<100;i++){
    if (num %mult === 0 && num %mult2 === 0){
        console.log(nombre + nombre1);
    }else if (num %mult === 0){
        console.log(nombre);
    }else if (num %mult2 === 0){
        console.log(nombre1);
    }else {
    console.log(i);
    }
    num++
}