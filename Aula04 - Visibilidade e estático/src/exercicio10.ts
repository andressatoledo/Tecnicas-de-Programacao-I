class Numero { 
    protected aleatorio():number { 
        return Math.floor(Math.random()*100); 
    } 
} 
 
class Categoria extends Numero { 
} 
 
class Teste extends Categoria { 
    //Se algo estiver protegido e precisar chamar em algum objeto
    public chamarAleatorio():number{
        return super.aleatorio();
    }
} 
 
const teste = new Teste(); 
console.log("Valor:", teste.chamarAleatorio() ); 