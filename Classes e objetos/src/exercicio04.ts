class Carro {
    marca: string = "";
    modelo: string = "";
    setMarca(marca: string): void {
        this.marca = marca;
    }
    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    print(): void {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

const primeirocarro = new Carro();
primeirocarro.setMarca("VW");
primeirocarro.setModelo("Gol");
primeirocarro.print()

const segundocarro = new Carro();
segundocarro.setMarca("Fiat");
segundocarro.setModelo("Uno");
segundocarro.print()