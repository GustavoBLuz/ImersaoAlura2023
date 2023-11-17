var numeroSecreto = 1 + parseInt(Math.random() * 1000); //numero secreto
var limiteTentativas = 3; //variavel do limite
var tentativas = 0; //variavel da tentativa

while(chute != numeroSecreto &limiteTentativas != tentativas) //Enquanto o chute não for o numero secreto
{
   var chute = prompt('Digite seu chute! Entre 0 e 1000:'); //captura o chute
   if(chute == numeroSecreto) ////Se o chute for certo
    {
    alert ("Parabens! Você acertou na sua "+tentativas+"° tentativa!"); //caso acerte
    } else if(chute > numeroSecreto) //caso o numero chutado seja errado mas maior
      {
        alert("Errou! O número é menor do que "+chute);
        tentativas = tentativas + 1; //soma uma tentativa 
      } else if (chute < numeroSecreto){ // caso o numero chutado seja errado mas menor
        alert("Errou! O número é maior que " + chute);
        tentativas = tentativas + 1; //soma uma tentativa 
      }
        if(limiteTentativas === tentativas) //verifica qual tenativa é e se chegou no limite
        {
          alert("Seu número de tentativas acabou! O número correto é: "+numeroSecreto) //caso o numero de tentativas atinga o maximo
        }else
        {
          alert("Você já utilizou "+tentativas+" tentativas de: "+limiteTentativas)
        }
    
}


//Desafio 1: Adicione o limite de tentativas
//Desafio 2: 