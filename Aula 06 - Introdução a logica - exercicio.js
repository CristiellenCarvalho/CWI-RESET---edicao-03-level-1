nome = "Cristiellen"
idade = 27
peso = 150.0
altura = 1.74
imc = peso / (altura * altura)
classificacao = ""
Grau = 0

if (imc < 18.50) { 
  classificacao = "Magreza"
  Grau = 0 
} else if (imc < 25) { 
  classificacao = "Normal"
  Grau = 0
} else if (imc < 30) { 
  classificacao = "Sobrepeso"
  Grau = 1
} else if (imc < 40) { 
  classificacao = "Obesidade"
  Grau = 2
} else { 
  classificacao = "Obesidade grave"
  Grau = 3
}   

console.log(nome + " seu imc é: " + imc )
console.log("A sua classificação é : " + classificacao)

if( Grau > 0) { 
  console.log("Cuidado! Você está acima do peso recomendado pela OMS." )
}

if ( Grau == 3 ) { 
  console.log("É importante procurar um médico para avaliar sua saúde.")
}