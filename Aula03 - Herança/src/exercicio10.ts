class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    } 
    
    ultima(): string {
        return this.charAt(this.length - 1);
    }
} 

let texto = new Texto("Boa noite");
console.log(`Quantidade: ${texto.length}`);
console.log(`Primeira letra: ${texto.primeira()}`);
console.log(`Última letra: ${texto.ultima()}`);
console.log(`Lower: ${texto.toLowerCase()}`);