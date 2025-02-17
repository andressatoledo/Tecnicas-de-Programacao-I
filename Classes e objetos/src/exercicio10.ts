class Circulo{
    raio:number;

    constructor(raio:number){
        this.raio = raio;
    }

    area():number{
        let areatotal: number;
        areatotal = Math.PI * this.raio ** 2;
        return areatotal;
    }

    perimetro():number{
        let perimetrototal: number;
        perimetrototal = 2 * Math.PI * this.raio;
        return perimetrototal;
    }
}


const circulo = new Circulo(5);
console.log("Área:", circulo.area());
console.log("Perímetro:", circulo.perimetro());
