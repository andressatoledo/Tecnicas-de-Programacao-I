import { Carro } from "./exercicio04"

const a = new Carro("Fiat","Uno");
const b = new Carro("VW","Gol");
const c = new Carro("Honda","Civic");
const veiculos:Carro[] = [];
veiculos.push(a);
veiculos.push(b);
veiculos.push(c);

console.log(veiculos);
