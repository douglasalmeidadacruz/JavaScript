const nomeAluno = "Lucas Silva";
const idade = 16;
const nomeCurso = "Desenvolvimento de Sistemas";
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.0;
let faltas = 4;
let estaMatriculado = true;

console.log("=== DADOS DO ALUNO ===");
console.log("Nome:", nomeAluno);
console.log("Idade:", idade);
console.log("Curso:", nomeCurso);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Faltas:", faltas);
console.log("Matriculado:", estaMatriculado);

const media = (nota1 + nota2 + nota3) / 3;
console.log("\nMédia calculada:", media);

let situacaoMedia = "";

if (media >= 7) {
  situacaoMedia = "Aprovado";
} else if (media >= 5) {
  situacaoMedia = "Recuperação";
} else {
  situacaoMedia = "Reprovado";
}

const totalAulas = 40;
const aulasFrequentadas = totalAulas - faltas;
const percentualFrequencia = (aulasFrequentadas / totalAulas) * 100;
const atingiuFrequenciaMinima = percentualFrequencia >= 75;

const aprovadoFinal = (media >= 7) && (percentualFrequencia >= 75) && estaMatriculado;

console.log("Aluno:", nomeAluno);
console.log("Idade:", idade);
console.log("Curso:", nomeCurso);
console.log("Média Final:", media);
console.log("Frequência:", percentualFrequencia + "%");
console.log("Situação pela Média:", situacaoMedia);

if (aprovadoFinal) {
  console.log("Resultado Final: APROVADO NO CURSO!");
} else {
  console.log("Resultado Final: NÃO APROVADO nos critérios finais.");
}