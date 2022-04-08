const prompt = require("prompt-sync")();


function soma(){

    
    let x = 0
    let y = 0
    let soma = 0
    
    do {
    x =parseInt(prompt("Escreva o primeiro numero"));
    y =parseInt(prompt("Escreva o segundo numero"));
        
    } while (x < 0 && y < 0 && x > y );
    

    for (let i = x; i < y; i++) {
        soma = soma + i   
    }
    
    console.log(soma)

}

soma()



 class Pessoa{
     nome:string;
     idade:number;
    constructor( nome:string,idade:number){
     this.nome = nome;
     this.idade = idade; 
    
     }

     calcularIdade(){
         return this.idade * 12;
     }
}

 const informacoes = new Pessoa('Artur',24);

 console.log(informacoes.calcularIdade());