
/* =========================================
   PROJETO: ANÁLISE DE CUSTOS DE FRETE
   AGRÁRIA
   ========================================= */

// Arquivo com os dados preparados pelo Python
const ARQUIVO_DADOS = "dados.json";

// Dados que serão carregados
let dadosFrete = [];

// Inicialização do painel
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema de análise de fretes iniciado.");

    carregarDados();
});

// Carregar dados do Python
async function carregarDados() {
    try {
        const resposta = await fetch(ARQUIVO_DADOS);

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os dados.");
        }

        dadosFrete = await resposta.json();

        console.log("Dados carregados:", dadosFrete);
        console.log("Total de registros:", dadosFrete.length);

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

