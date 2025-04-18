function caulcularMoedas(){
let brinquedos, moedas
 
 brinquedos = Number(prompt("Quantos brinquedos que você trouxe? "))

  if(brinquedos >= 0 && brinquedos <= 3){
    moedas = brinquedos
    }else{
        if(brinquedos > 3){
            moedas = 3}

       }
      
 alert("Sua Quantidade de BrinqueMoedas: " + moedas)
 }