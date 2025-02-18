let totalEleitores:number, votosBrancos:number,VotosNulos:number,votosValidos:number,
percentualVotosBrancos:number,percentualVotosNulos:number,percentualVotosValidos:number;

totalEleitores = 100;
votosBrancos   = 10;
VotosNulos     = 20;
votosValidos   = 70;

percentualVotosBrancos = (votosBrancos / totalEleitores) * 100;
percentualVotosNulos = (VotosNulos / totalEleitores) * 100;
percentualVotosValidos = (votosValidos / totalEleitores) * 100;


console.log(`Percentual de votos brancos: ${percentualVotosBrancos}%`);
console.log(`Percentual de votos nulos: ${percentualVotosNulos}%`);
console.log(`Percentual de votos válidos: ${percentualVotosValidos}%`);
