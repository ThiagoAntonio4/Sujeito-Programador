//MAP
let lista = ['MATHEUS','JOSE','BALIFONE']

lista.map((item,index)=>{
    console.log(`nome ${item} no indice ${index}`)
})

//REDUCE
let numeros = [5,3,2,5]

let total = numeros.reduce((acummulator,num,index,original)=>{
    console.log(`${acummulator}=total ate o momento`)
    console.log(`${num}=numero atual`)
    console.log(`${index}=index atual`)
    console.log(`${original}=array original`)

    return (acummulator += num)
})

console.log(total)

//FIND
let listagem = [5,3,'Supi',2,'Fabio']

let busca = listagem.find((item)=>{ //pega o primeiro e acaba, senao undefined, mas so se return = bool
    if(item === "Supi"){
        return console.log(`Achou ${item}`)
    }
})

console.log(busca)

//FILTER
let palavras = ['palavra','criativa','dade','puts','errou'] 

let filtro = palavras.filter((item)=>{ //pega todos e exibe vetor
    return item.length <= 4
})

console.log(filtro)