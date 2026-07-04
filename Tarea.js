function multiplicar(num , max){
        if(max === 0){
            max = 10;
        }else{
        console.log("====="+"Tabla de multiplicar: "+num+"=====");
        for (let i = 1;i <= max;i++){
            console.log(num + "X"+ i + "=" + (num*i));
        }
    }
    }

multiplicar(7);
