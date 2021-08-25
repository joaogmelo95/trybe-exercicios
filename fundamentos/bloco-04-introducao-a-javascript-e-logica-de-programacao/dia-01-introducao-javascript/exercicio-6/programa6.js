const character = "Pipa";

switch (character.toLowerCase()) {
    case "peão":
        console.log("Um espaço para frente");
        break;

    case "torre":
        console.log("Para frente ou para os lados até atingir um obstáculo");
        break;

    case "cavalo":
        console.log("Dois espaços para um lado e mais um à direita ou à esquerda");
        break;

    case "bispo":
        console.log("Em qualquer diagonal até atingir um obstáculo");
        break;

    case "rei":
        console.log("Um espaço para qualquer lado");
        break;

    case "rainha":
        console.log("Para qualquer lado ou diagonal, até atingir um obstáculo");
        break;

    default:
        console.log("Essa peça não existe");
}