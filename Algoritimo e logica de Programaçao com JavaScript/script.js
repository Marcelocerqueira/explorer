/*Encontre a solução ao problema:

  Pergunta o nome do usuario e  escreva a mensagem:
  "Ola, [nome do usuario]"*/

// let nome = prompt("qual o seu nome?")
// let idade = prompt("qual o sua idade?")
// alert("Meu nome e, " + nome + ",tenho = " + idade)

// Aula 01
/*
Solicite 2 numero, faça a soma deles
e apresente o resultado final ao usario
*/

// Aula 02

// alert("Iremos somar 2 números")

// let number01 = prompt("digite o primeiro numero:")
// let number02 = prompt("digite o segundo numero:")
// let result = Number(number01) + Number(number02)
// alert("Resultado final:" + result)


/*Capturar 2 números e fazer as operacões matemáticas de StorageManager
subtração, multiplicaçãp,
dividsão e resto da divisão.

e para cada operação, mostrar um alerta com o resultado.*/


/*
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)/2 
*/

/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
/*
let student = prompt("Qual seu nome")
let n1 = prompt("Qual sua primeira nota")
let n2 = prompt("Qual sua segunda nota")
let n3 = prompt("Qual sua terceira nota")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(1)

if (result) {
 alert("Parabens," + student + "! Sua media foi de:" + average)
} else if (average < 3) {
 alert("Reprovado")
}
else {
 alert(student + "Estudar para sua  prova de recuperação! Sua media foi de:" + average)
}
*/

/*

Capture 10 items para compor a lista de um supermercado.

Após captura os 10 itmas, imprima-os, separado por vígula.



let items = [];

for(let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item" + (item + 1))

  items[item] = itemName
}
 alert(items [2])

 */



/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
 



{

  alert(" Vamos soma dois Números e mostra as 5 operacões. No final comparar se o numero digitado são iguais. ")

  let n1 = prompt("Digite o primeiro numero")
  let n2 = prompt("Digite o segundo numero")



  let mais = Number(n1) + Number(n2)
  let sub = Number(n1) - Number(n2)
  let mult = Number(n1) * Number(n2)
  let div = Number(n1) / Number(n2)
  let rest = Number(n1) % Number(n2)



  alert(" A soma dos dois números: " + mais)
  alert(" A subtração dos dois números: " + sub)
  alert(" A multiplicação dos dois números: " + mult)
  alert(" A divisão dos dois números: " + div)
  alert(" O resto da divisão dos dois números: " + rest)


  if (mais % 2 == 1) {
    alert(" A soma dos dois numero e Ímpar: " + mais)
  }
  else {
    alert(" A soma dos dois numero e Par: " + mais)
  }
  if (n1 === n2) {
    alert(" Os numeros sao iguais:")
  } else {
    alert("Os numeros inserido sao diferent:")
  }

}
*/

const estudantes = [
  {
    name: "Marcelo",
    nota01: 7,
    nota02: 8,
  },

  {
    name: "Ricardo",
    nota01: 6,
    nota02: 6,
  },

  {
    name: "Arthur",
    nota01: 9,
    nota02: 8.5,
  },

  {
    name: "Lucas",
    nota01: 9,
    nota02: 8,
  },


]

let estudantesNames = []

for(let estudante of estudantes) {
  estudantesNames.push(estudante.name)
}

alert(`A media do(a) aluno(a): 
${estudantes[0].name}: è ${((estudantes[0].nota01) + (estudantes[0].nota02))/2} 
Parabéns ${estudantes[0].name}(a) vc foi Aprovado no concurso!`)

alert(`A media do(a) aluno(a): 
${estudantes[1].name}: è ${((estudantes[1].nota01) + (estudantes[1].nota02))/2} 
Não foi dessa vez. ${estudantes[1].name}(a) Tente novamente!`)

alert(`A media do(a) aluno(a): 
${estudantes[2].name}: è ${((estudantes[2].nota01) + (estudantes[2].nota02))/2} 
Parabéns, ${estudantes[2].name}(a) você foi Aprovado no concurso!`)

alert(`A media do(a) aluno(a): 
${estudantes[3].name}: è ${((estudantes[3].nota01) + (estudantes[3].nota02))/2} 
Parabéns ${estudantes[3].name}(a) vc foi Aprovado no concurso!`)



