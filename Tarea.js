function multiplicar(num , max = 10){
        console.log("====="+"Tabla de multiplicar: "+num+"=====");
        for (let i = 1;i <= max;i++){
            console.log(num + "X"+ i + "=" + (num*i));
        }
    }
multiplicar(7);