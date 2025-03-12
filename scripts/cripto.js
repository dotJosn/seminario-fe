document.addEventListener("DOMContentLoaded", () => {
  // Seleção dos elementos
  const detailsSimetrica = document.getElementById("detailsSimetrica");
  const detailsAssimetrica = document.getElementById("detailsAssimetrica");
  const detailsRepouso = document.getElementById("detailsRepouso");
  const detailsTransito = document.getElementById("detailsTransito");

  const animSimetrica = document.getElementById("simetrica");
  const animAssimetrica = document.getElementById("assimetrica");
  const animRepouso = document.getElementById("repouso");
  const animTransito = document.getElementById("transito");

  const legendTextSimetrica = document.getElementById("legendTextSimetrica");
  const legendTextAssimetrica = document.getElementById("legendTextAssimetrica");
  const legendTextRepouso = document.getElementById("legendTextRepouso");
  const legendTextTransito = document.getElementById("legendTextTransito");

  // Função para iniciar animações
  function startAnimation(animElement, textElement, legendElement, steps) {
      let step = 0;

      function updateAnimation() {
          if (step >= steps.length) step = 0; // Reinicia o ciclo
          const { content, legend } = steps[step];
          textElement.textContent = content;
          legendElement.textContent = legend;
          step++;
      }

      // Inicia a animação
      animElement.style.animation = "criptografia-ex 10s linear infinite"; // Animação mais lenta
      updateAnimation(); // Primeira atualização

      // Atualiza o conteúdo nos momentos certos
      const interval = 2000; // 2 segundos (20% da animação de 10 segundos)
      let intervalId = setInterval(updateAnimation, interval);

      // Retorna o ID do intervalo para poder parar a animação
      return intervalId;
  }

  // Passos das animações
  const simetricaSteps = [
      { content: "🔓 Olá, Mundo!", legend: "🔓 Mensagem original" },
      { content: "🔑 Criptografando", legend: "🔑 Aplicando a chave simétrica" },
      { content: "🔐 X8$kLm9@", legend: "🔐 Mensagem criptografada" },
      { content: "🔑 Descriptografando", legend: "🔑 Aplicando a chave simétrica" },
      { content: "🔓 Olá, Mundo!", legend: "🔓 Mensagem descriptografada" },
  ];

  const assimetricaSteps = [
      { content: "🔑 Chave Pública", legend: "🔑 Alice usa a chave pública de Bob" },
      { content: "🔐 Criptografando", legend: "🔐 Mensagem criptografada com a chave pública" },
      { content: "🔒 X8$kLm9@", legend: "🔒 Mensagem criptografada enviada para Bob" },
      { content: "🔑 Chave Privada", legend: "🔑 Bob usa sua chave privada" },
      { content: "🔓 Olá, Bob!", legend: "🔓 Mensagem descriptografada" },
  ];

  const repousoSteps = [
      { content: "📄 Relatório.pdf", legend: "📄 Arquivo original" },
      { content: "🔒 Criptografando", legend: "🔒 Arquivo sendo criptografado" },
      { content: "🔐 Arquivo Criptografado", legend: "🔐 Arquivo protegido em repouso" },
      { content: "🔓 Descriptografando", legend: "🔓 Arquivo sendo descriptografado" },
      { content: "📄 Relatório.pdf", legend: "📄 Arquivo descriptografado" },
  ];

  const transitoSteps = [
      { content: "💻 Dados Confidenciais", legend: "💻 Dados no dispositivo de origem" },
      { content: "🔒 Criptografando", legend: "🔒 Dados sendo criptografados" },
      { content: "🚀 X8$kLm9@", legend: "🚀 Dados em trânsito (protegidos)" },
      { content: "🔓 Descriptografando", legend: "🔓 Dados sendo descriptografados" },
      { content: "💻 Dados Confidenciais", legend: "💻 Dados recebidos no destino" },
  ];

  // Variáveis para armazenar os IDs dos intervalos
  let simetricaInterval, assimetricaInterval, repousoInterval, transitoInterval;

  // Eventos de abrir/fechar os detalhes
  detailsSimetrica.addEventListener("toggle", () => {
      if (detailsSimetrica.open) {
          simetricaInterval = startAnimation(
              animSimetrica,
              document.getElementById("simetrica-txt"),
              legendTextSimetrica,
              simetricaSteps
          );
      } else {
          clearInterval(simetricaInterval);
          animSimetrica.style.animation = "none";
      }
  });

  detailsAssimetrica.addEventListener("toggle", () => {
      if (detailsAssimetrica.open) {
          assimetricaInterval = startAnimation(
              animAssimetrica,
              document.getElementById("assimetrica-txt"),
              legendTextAssimetrica,
              assimetricaSteps
          );
      } else {
          clearInterval(assimetricaInterval);
          animAssimetrica.style.animation = "none";
      }
  });

  detailsRepouso.addEventListener("toggle", () => {
      if (detailsRepouso.open) {
          repousoInterval = startAnimation(
              animRepouso,
              document.getElementById("repouso-txt"),
              legendTextRepouso,
              repousoSteps
          );
      } else {
          clearInterval(repousoInterval);
          animRepouso.style.animation = "none";
      }
  });

  detailsTransito.addEventListener("toggle", () => {
      if (detailsTransito.open) {
          transitoInterval = startAnimation(
              animTransito,
              document.getElementById("transito-txt"),
              legendTextTransito,
              transitoSteps
          );
      } else {
          clearInterval(transitoInterval);
          animTransito.style.animation = "none";
      }
  });
});

// Seleção dos elementos
const detailsCriptografiaArmazenamento = document.getElementById("detailsCriptografiaArmazenamento");
const detailsBackup = document.getElementById("detailsBackup");
const detailsAutenticacao = document.getElementById("detailsAutenticacao");

const animCriptografiaArmazenamento = document.getElementById("criptografia-armazenamento");
const animBackup = document.getElementById("backup");
const animAutenticacao = document.getElementById("autenticacao");

const legendTextCriptografiaArmazenamento = document.getElementById("legendTextCriptografiaArmazenamento");
const legendTextBackup = document.getElementById("legendTextBackup");
const legendTextAutenticacao = document.getElementById("legendTextAutenticacao");

// Função para iniciar animações
function startAnimation(animElement, textElement, legendElement, steps, interval) {
  let step = 0;

  function updateAnimation() {
      if (step >= steps.length) step = 0; // Reinicia o ciclo
      const { content, legend } = steps[step];
      textElement.textContent = content;
      legendElement.textContent = legend;
      step++;
  }

  // Inicia a animação
  animElement.style.animation = "criptografia-ex 8s linear infinite"; // Animação mais lenta
  updateAnimation(); // Primeira atualização
  const intervalId = setInterval(updateAnimation, interval);

  // Retorna o ID do intervalo para poder parar a animação
  return intervalId;
}

// Passos das animações
const criptografiaArmazenamentoSteps = [
  { content: "🔒", legend: "🔒 Dados criptografados em repouso" },
  { content: "🔓", legend: "🔓 Dados descriptografados com a chave correta" },
];

const backupSteps = [
  { content: "💾", legend: "💾 Backup seguro criado" },
  { content: "🔒", legend: "🔒 Backup criptografado armazenado" },
  { content: "🔓", legend: "🔓 Backup recuperado com sucesso" },
];

const autenticacaoSteps = [
  { content: "🔑", legend: "🔑 Insira sua senha" },
  { content: "📱", legend: "📱 Código enviado para o celular" },
  { content: "✅", legend: "✅ Acesso concedido" },
];

// Variáveis para armazenar os IDs dos intervalos
let criptografiaArmazenamentoInterval, backupInterval, autenticacaoInterval;

// Eventos de abrir/fechar os detalhes
detailsCriptografiaArmazenamento.addEventListener("toggle", () => {
  if (detailsCriptografiaArmazenamento.open) {
      criptografiaArmazenamentoInterval = startAnimation(
          animCriptografiaArmazenamento,
          document.getElementById("criptografia-armazenamento-txt"),
          legendTextCriptografiaArmazenamento,
          criptografiaArmazenamentoSteps,
          4000 // Intervalo de 4 segundos
      );
  } else {
      clearInterval(criptografiaArmazenamentoInterval);
      animCriptografiaArmazenamento.style.animation = "none";
  }
});

detailsBackup.addEventListener("toggle", () => {
  if (detailsBackup.open) {
      backupInterval = startAnimation(
          animBackup,
          document.getElementById("backup-txt"),
          legendTextBackup,
          backupSteps,
          3000 // Intervalo de 3 segundos
      );
  } else {
      clearInterval(backupInterval);
      animBackup.style.animation = "none";
  }
});

detailsAutenticacao.addEventListener("toggle", () => {
  if (detailsAutenticacao.open) {
      autenticacaoInterval = startAnimation(
          animAutenticacao,
          document.getElementById("autenticacao-txt"),
          legendTextAutenticacao,
          autenticacaoSteps,
          2000 // Intervalo de 2 segundos
      );
  } else {
      clearInterval(autenticacaoInterval);
      animAutenticacao.style.animation = "none";
  }
});