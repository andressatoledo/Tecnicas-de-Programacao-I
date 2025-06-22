class Carro{
    private static contador: number =0;
    constructor(private _marca: string, private _modelo: string){
        Carro.contador ++
    }
    
    set marca(entrada:string){
        this._marca = entrada;
    }

    set modelo(entrada:string){
        this._modelo = entrada;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    public static getContador(){
        return this.contador
    }
}

const a = new Carro("VW","Gol"); 
console.log(Carro.getContador())
const b = new Carro("Fiat","Uno"); 
console.log(Carro.getContador())
const c = new Carro("GM","Corsa"); 
console.log(Carro.getContador())

