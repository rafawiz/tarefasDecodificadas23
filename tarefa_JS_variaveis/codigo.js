alert("Página carregada com sucesso!");

var x = 10;
var y = 7;

var soma = x + y;
var divisao = x/y;
var produto = x * y;


if (soma == divisao){
    alert("O valor da soma é igual ao valor da divisão!");
}
else{
    alert("O valor da soma não é igual ao valor da divisão!");
}

if (soma ==  produto){
    alert("O valor da soma é igual ao valor do produto!");
}
else{
    alert("O valor da soma não é igual ao valor do produto")
}

if (divisao ==  produto){
    alert("O valor da divisão é igual ao valor do produto!");
}
else{
    alert("O valor da divisão não é igual ao valor do produto!");
}

console.log(soma)
console.log(divisao)
console.log(produto)