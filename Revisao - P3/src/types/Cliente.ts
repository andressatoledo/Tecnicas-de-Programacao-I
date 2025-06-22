import {Pessoa} from "./Pessoa"

class Cliente extends Pessoa{
   saldo: number;
   
    constructor(nome: string, email: string, nasc: Date,saldo:number){
        super(nome, email, nasc);
         this.saldo =  saldo;
    }

    imprimir(){
        console.log(`Nome: ${this.nome} \n e-mail: ${this.email} \n Data Nasc.: ${this.nasc.toLocaleString('pt-BR', { timeZone: 'UTC', year: 'numeric', month: 
'2-digit', day: '2-digit' })} \n Idade: ${this.idade(this.nasc)} anos \n Faixa etária: ${this.faixaEtaria()} \n Anos Bixxestos: ${this.numBissextos(this.nasc)} \n Saldo: ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }
}

export {Cliente};