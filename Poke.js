async function pokemon() {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
            if (!response.ok) throw new Error (` Error HTTP: ${response.status}`);
            const list = await response.json();
            list.results.forEach((p, index) => console.log(`${index + 1}. ${p.name}`));
        console.log("========================\n");
        }catch(error){
            console.error("Error ", error.message);
            return null;
        }      
}
const readline = require(`readline/promises`);
const {stdin:imput , stdout: output } = require(`process`);

async function buscaPokemon(id) {

    const rl = readline.createInterface({input: process.stdin,
  output: process.stdout});

        try{
            const id = await rl.question("Que pokemon buscas? (Escribir solo id) ");
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.trim()}`);
            if (!response.ok) throw new Error (` Error HTTP: ${response.status}`);
            const buscado = await response.json();
            console.log("=======Encontrado======");
           console.log("Nombre:" +buscado.name);
           buscado.abilities.forEach(a => {console.log("Habilidad: " + a.ability.name);
           });
           console.log("=====================");
           return buscado;
        }catch(error){
            console.error("Error ", error.message);
            return null;
        }      
        finally{
            rl.close();
        }
}

async function inicio(){
    await pokemon();
    await buscaPokemon();

}
inicio()