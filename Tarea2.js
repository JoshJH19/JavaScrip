function comprobar(num){
    if (num <= 1)
        return false;
        for (let i = 2; i <= Math.sqrt(num);i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }

function primos(min,max){
    for (let i = min;i <= max;i++){
        if(comprobar(i)){
            console.log(i + "Es primo")
        }
        else {
            console.log(i + "No es primo");
        }
    }
}
primos(6,30);