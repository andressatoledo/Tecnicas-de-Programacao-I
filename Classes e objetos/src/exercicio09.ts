class Numero {
  nros: number[] = [];
  add(nro: number): void {
    //adiciona o nro no final do array
    this.nros.push(nro);
  }
  sum(): number {
    let s = 0;
    for (let i = 0; i < this.nros.length; i++) {
      s += this.nros[i];
    }
    return s;
  }
  max() {
    let maior = this.nros[0];
    for (let i = 0; i < this.nros.length; i++) {
      if (this.nros[i] > maior) {
        maior = this.nros[i];
      }
    }
    return maior;
  }
}


const objnumero = new Numero();
objnumero.add(8);
objnumero.add(2);
objnumero.add(9);
objnumero.add(4);
objnumero.add(5);

let soma:number = objnumero.sum();
let max:number = objnumero.max();
console.log('Somatório:',soma);
console.log('Maior:',max);