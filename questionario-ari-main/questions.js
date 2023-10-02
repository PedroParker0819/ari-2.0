// Selecionando os elementos do DOM
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const previousQuestionBtn = document.getElementById('previous-question-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');

// Array de perguntas
const perguntas = [
  'Pergunta 1',
  'Pergunta 2',
  'Pergunta 3',
  'Pergunta 4',
  // adicione mais perguntas aqui
];

let perguntaAtualIndex = 0;

// Função para mudar a pergunta
function mudarPergunta() {
  questionElement.textContent = perguntas[perguntaAtualIndex];
}

// Função para ir para a próxima pergunta
function proximaPergunta() {
  perguntaAtualIndex++;
  
  if (perguntaAtualIndex >= perguntas.length) {
    perguntaAtualIndex = 0;
  }
  
  mudarPergunta();
}

// Função para voltar para a pergunta anterior
function perguntaAnterior() {
  perguntaAtualIndex--;
  
  if (perguntaAtualIndex < 0) {
    perguntaAtualIndex = perguntas.length - 1;
  }
  
  mudarPergunta();
}

// Adicionando eventos de clique aos botões
nextQuestionBtn.addEventListener('click', proximaPergunta);
previousQuestionBtn.addEventListener('click', perguntaAnterior);