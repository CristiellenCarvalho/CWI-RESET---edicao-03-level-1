function calculcarImc(massa,altura) { 
 resultado = massa / (altura * altura )
    return  resultado
}


function verificaNivel (resultado) { 

nivel = 0 

if (resultado < 17) { 
    nivel = 0 
} else if ( resultado < 18.5) { 
    nivel = 1 
} else if ( resultado < 25) { 
    nivel = 2 
} else if ( resultado < 30) { 
    nivel = 3 
} else if ( resultado < 35) { 
    nivel = 4 
} else if (resultado < 40) { 
    nivel = 5 
} else { 
    nivel = 6

}
return nivel

}

nivel = verificaNivel( calculcarImc (80 , 1.74))
console.log(nivel)