const cypress = require('cypress');
const tesults = require('cypress-tesults-reporter');

// Captura o nome do navegador via argumento de terminal, com fallback para 'electron'
const browser = process.argv[2] || 'electron';

console.log(`🔧 Executando Cypress com o navegador: ${browser}`);

cypress.run({
  browser: browser,
  // Você pode adicionar filtros como spec ou configFile aqui se necessário
})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN,
  };

  console.log('📦 Enviando resultados para o Tesults...');
  tesults.results(results, args);
})
.catch((err) => {
  console.error('❌ Erro ao rodar Cypress:', err);
  process.exit(1);
});
