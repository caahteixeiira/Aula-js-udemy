class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando.`)
    }
    comer(){
        console.log(`${this.nome} está comendo.`)
    }
    beber(){
        console.log(`${this.nome} está bebendo.`)
    }
}



//Prototypes 
/*
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`)
}
*/

const p1 = new Pessoa('Carol', 'Teixeira');
console.log(p1);