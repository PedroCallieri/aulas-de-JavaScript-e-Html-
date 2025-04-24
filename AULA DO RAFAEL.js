    function viagem(){
        let distViagem = Number(prompt("Qual foi a distância da sua viagem? "))
        let tempoDeViagem = distViagem / 300000

        if(tempoDeViagem <= 60 && tempoDeViagem >= 0){
           alert("Sua viagem durou "+ tempoDeViagem +" segundo(s)")
        }else if(tempoDeViagem > 60 && tempoDeViagem <= 3600){
           tempoDeViagem = tempoDeViagem / 60
           alert("Sua viagem durou "+ tempoDeViagem +" Minuto(s)")  
        }else if(tempoDeViagem > 3600 && tempoDeViagem <= 86400){
           tempoDeViagem = tempoDeViagem / 3600
           alert("Sua viagem durou "+ tempoDeViagem +" Hora(s)")
        }else if(tempoDeViagem > 86400 && tempoDeViagem <= 604800){
           tempoDeViagem = tempoDeViagem / 86400
           alert("Com toda certeza você foi de carro/ônibus pra viagem durar "+ tempoDeViagem +" Dia(s)")
        }else if(tempoDeViagem > 604800 && tempoDeViagem <= 18144000){
           tempoDeViagem = tempoDeViagem / 604800 
           alert("Sua viagem durou "+ tempoDeViagem +" mês/meses,dinovo viajando de carro pae?a passagem de avião ta tão cara?")  
        }else if(tempoDeViagem <= 217728000){
            tempoDeViagem = tempoDeViagem / 2177728000
            alert("A viagem até Júpiter dura cerca de uns 3 anos com a tecnologia atual sua viagem durou " + tempoDeViagem + " ano(s) cê já chegou ou ta perto?")
        }

}