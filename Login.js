const name2 = "Joshua";
const password2 = 1234;

const persona = {
    name: "Joshua",
    password: 1234,
    color: "Red",
    trabajo: "Tortilleria",
    edad: 19,
    genero: "Masculino",
    carrera: "IngSistemas",
    peso: 98,
    altura: "170cm",
    vivo: true
}
    if(name2 === persona.name && password2 === persona.password){
        console.log("Bienvenido");
    }else {
        console.log("Incorrecto");
    }