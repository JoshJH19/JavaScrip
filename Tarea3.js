function piramide(num){
    for (let i = 1; i<=num;i++){
        let esp = ' ';
        for (let j = 1;j<=i;j++){
            esp += j + ' ';
        }
        console.log(esp);
    }
}
piramide(10);