let numeros = [1,2,3]

let todosNumeros = [...numeros,4,5,6]

console.log(todosNumeros)

console.log(typeof(numeros), typeof(todosNumeros))

let pessoa = {
    nome:"Thiago",
    sobrenome:"Antonio",
    cargo:"Bolsista",
    empresa:"CEPEDI"
}

/*let novaPessoa2025 = {
    ...pessoa,
    status: "UI",
    cidade: "zuzubalandia",
    telefone: "40028922"
}

console.log(novaPessoa2025)
*/
function newUser(info){
    let data = {
    ...info,
    status: "UI",
    cidade: "zuzubalandia",
    telefone: "40028922"
    }
    console.log(data)
}

newUser(pessoa)