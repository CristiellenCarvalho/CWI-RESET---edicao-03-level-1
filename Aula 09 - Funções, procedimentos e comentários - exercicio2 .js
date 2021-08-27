/* imprimir */ 
function imprimir(conteudo) { 
    return console.log(conteudo)
}


/* Verificar se os nomes são iguais */ 
function mesmoNome(nomeDoBeltrano , nomeDoFulano) {
    return nomeDoFulano == nomeDoBeltrano
} 
/* Verificar se é maior de idade */ 
function maiorIdade(idade) {
    return idade >= 18 
}


/* Calcular valor do juros*/ 
function valorComJuros(valorDoBoleto) { 
    return valorDoBoleto * 1.1 
} 

/* Calcular media aritmética */ 
function calcularMedia(numeros) { 
    soma = 0

    for( i = 0 ; i < numeros.length ; i++) { 
        soma += numeros[i]
    }
    return soma / numeros.length
}



/* Calcular Margem bruta */ 
function margemBruta(receitaLiquidaVendas, custosProdutosVendas) { 
    lucroBruto = receitaLiquidaVendas - custosProdutosVendas
    return (lucroBruto / receitaLiquidaVendas) * 100
}


cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
