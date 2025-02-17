class Ponto{
    x: number;
    y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    distancia(ponto: Ponto): number{
        let distancia: number;
        distancia = Math.sqrt(((ponto.x - this.x) ** 2 + (ponto.y - this.y) ** 2));
        return distancia;
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
console.log("Distância:", a.distancia(b));