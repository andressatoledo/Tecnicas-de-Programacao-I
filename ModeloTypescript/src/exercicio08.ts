let salarioAntigo:number,percentualreajuste:number,salarioReajustado:number;

salarioAntigo = 1000;
percentualreajuste = 2;
salarioReajustado = salarioAntigo + (salarioAntigo * percentualreajuste/100);
console.log(`Salário atual: ${salarioAntigo}`);
console.log(`Salário reajustado: ${salarioReajustado}`);