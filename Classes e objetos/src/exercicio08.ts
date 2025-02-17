class Point{
    x: number;
    y: number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    distance(point: Point){
        let distance: number;
        distance = Math.sqrt(((point.x - this.x) ** 2 + (point.y - this.y) ** 2));
        return distance;
    }
}

class Rectangle{
    inferiorEsquerdo: Point;
    superiorDireito: Point;

    constructor(ie:Point,sd:Point){
        this.inferiorEsquerdo = ie;
        this.superiorDireito = sd; 
    }

     area(): number{
        let areatotal = ((this.superiorDireito.x - this.inferiorEsquerdo.x) * (this.superiorDireito.y - this.inferiorEsquerdo.y));
        return areatotal;
        }

   
}

const sd = new Point(3,5);
const ie = new Point(1,2);

//observe que o construtor da classe Rectangle
//recebe dois objetos do tipo Point como parâmetro
const r = new Rectangle(ie,sd);
console.log("Área:", r.area());