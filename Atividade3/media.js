var notas = [];

var notaInput = null;

for (var i = 1; i <= 3; i++) {
  notaInput = prompt('Insira a ' + i + 'ª nota:');
  notas.push(notaInput);
}

var media = (parseFloat(notas[0]) + parseFloat(notas[1]) + parseFloat(notas[2])) / 3

alert('A sua média é: ' + media);
