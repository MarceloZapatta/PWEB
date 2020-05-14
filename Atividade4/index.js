var escolhaInput = prompt(
  "Escolha uma opção: \n\n[1] Pedra\n\n[2] Papel\n\n[3] Tesoura"
);

var escolhaUsuario = "";

switch (escolhaInput) {
  case "1":
    escolhaUsuario = "PEDRA";
    break;
  case "2":
    escolhaUsuario = "PAPEL";
    break;
  default:
    escolhaUsuario = "TESOURA";
    break;
}

var randomComputador = Math.random();

var escolhaComputador = "PAPEL";

if (randomComputador >= 0 && randomComputador < 0.33) {
  escolhaComputador = "PEDRA";
} else if (randomComputador >= 0.33 && randomComputador < 0.66) {
  escolhaComputador = "TESOURA";
}

alert(
  "Escolha computador: " +
    escolhaComputador +
    "\nSua escolha: " +
    escolhaUsuario
);

var ganhador = "";

if (escolhaUsuario === escolhaComputador) {
  ganhador = "EMPATE";
} else if (escolhaUsuario === "PAPEL") {
  ganhador = "USUARIO";
  if (escolhaComputador === "TESOURA") {
    ganhador = "COMPUTADOR";
  }
} else if (escolhaUsuario === "PEDRA") {
  ganhador = "USUARIO";
  if (escolhaComputador === "PAPEL") {
    ganhador = "COMPUTADOR";
  }
} else {
  ganhador = "USUARIO";
  if (escolhaComputador === "PEDRA") {
    ganhador = "COMPUTADOR";
  }
}

alert("Resultado: " + ganhador);
