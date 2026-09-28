// ===============================
// ARMAZENAMENTO DO CADASTRO
// ===============================

const CHAVE_CADASTRO = "cadastroOng";


// ===============================
// SALVAR CADASTRO
// ===============================

export function salvarCadastro(dados) {

    localStorage.setItem(
        CHAVE_CADASTRO,
        JSON.stringify(dados)
    );

}


// ===============================
// OBTER CADASTRO
// ===============================

export function obterCadastro() {

    const dadosSalvos = localStorage.getItem(
        CHAVE_CADASTRO
    );

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}