let pessoa = {
    nome:"Thiago",
    sobrenome:"Antonio",
    cargo:"Bolsista",
    empresa:"CEPEDI"
};

const {nome:nomePessoa, sobrenome:sobrenomePessoa , cargo:cargoPessoa, empresa:empresaPessoa} = pessoa; //desestrutura o objeto e renomeia apenas aqui, nao o objeto

let nomes = ["napoleão","epaminondas","alipio"]

const {0:napoleao, 1:epaminondas, 2:alipio} = nomes //desestrutura o array e renomeia apenas aqui, nao o array

const [primeiroNome, segundoNome, terceiroNome] = nomes //desestruturação de array alternativo, por posição, e não por index direto

console.log(napoleao, terceiroNome, nomePessoa);