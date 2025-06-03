function convidados(...nome){
    console.log("sejam todos bem vivos")
    console.log(nome)
}

convidados("José", "Gabriel", "Fernando", "rui")

function sorteio(...numeros){
    //gera numero entre 0 e 0,999... e multiplica pelo tamanho do array feito pelo rest operator pra pegar o index do array
    let numeroGerado = Math.floor(Math.random() * numeros.length)
    
    console.log(numeros[numeroGerado])
}

sorteio(1,1,2,3,5,8,13,21,34,55,89,144,223,367,590,957) 