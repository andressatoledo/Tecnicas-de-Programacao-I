class Aleatorio {
  get(): number {
    return Math.floor(Math.random() * 100 + 1);
  }
}


const aleatorio = new Aleatorio();
let i:number = 0 ;
for ( i = 0; i < 5; i++){
    console.log(aleatorio.get());
}



