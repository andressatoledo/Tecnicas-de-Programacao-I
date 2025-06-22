class Pessoa {
    nome: string;
    email: string;
    nasc: Date;
    constructor(nome: string, email: string, nasc: Date) { 
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    imprimir() {
        console.log(`${this.nome}, e-mail: ${this.email} nasceu em: ${this.nasc}`);
    }

    idade(nasc: any): number {
        const hoje = new Date();
        const diferenca = hoje.getTime() - this.nasc.getTime();
        const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
        return idade;
    }

    numBissextos(dataNascimento: Date): number {
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();
        const anoNascimento = dataNascimento.getFullYear();

        const fezAniversario =
            hoje.getMonth() > dataNascimento.getMonth() ||
            (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() >= dataNascimento.getDate());

        let count = 0;
        for (let ano = anoNascimento; ano < anoAtual + (fezAniversario ? 1 : 0); ano++) {
            if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
                count++;
            }
        }
        return count;
    }


    faixaEtaria(): string {

        const i: number = this.idade(this.nasc);
        switch (true) {
            case i >= 0 && i < 13:
                return "Criança";
            case i >= 13 && i < 18:
                return "Adolescente";
            case i >= 18 && i < 60:
                return "Adulto";
            case i >= 60 && i < 100:
                return "Idoso";
            case i >= 100:
                return "Matusalém";
            default:
                return "Idade inválida";
        }
    }
}

export { Pessoa };

