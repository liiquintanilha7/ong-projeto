// ===============================
// FORMULÁRIO DE CADASTRO
// ===============================

import {
    salvarCadastro,
    obterCadastro
} from "./storage.js";


// ===============================
// CARREGAR DADOS SALVOS
// ===============================

function carregarCadastro() {
    const dados = obterCadastro();

    if (!dados) {
        return;
    }

    const form = document.getElementById("cadastro-form");

    if (!form) {
        return;
    }

    form.nome.value = dados.nome || "";
    form.email.value = dados.email || "";
    form.nascimento.value = dados.nascimento || "";
    form.cpf.value = dados.cpf || "";
    form.telefone.value = dados.telefone || "";
    form.cep.value = dados.cep || "";
    form.endereco.value = dados.endereco || "";
    form.cidade.value = dados.cidade || "";
    form.estado.value = dados.estado || "";
    form.participacao.value = dados.participacao || "";
}


// ===============================
// INICIALIZAR FORMULÁRIO
// ===============================

export function inicializarFormulario() {

    const form = document.getElementById("cadastro-form");

    if (!form) {
        return;
    }

    // Carrega os dados salvos
    carregarCadastro();


    // ===============================
    // SALVAR FORMULÁRIO
    // ===============================

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const dados = {
            nome: form.nome.value,
            email: form.email.value,
            nascimento: form.nascimento.value,
            cpf: form.cpf.value,
            telefone: form.telefone.value,
            cep: form.cep.value,
            endereco: form.endereco.value,
            cidade: form.cidade.value,
            estado: form.estado.value,
            participacao: form.participacao.value
        };

        salvarCadastro(dados);

        const feedback = document.getElementById("form-feedback");

        if (feedback) {
            feedback.textContent = "Cadastro salvo com sucesso!";
        }
    });


    // ===============================
    // VALIDAÇÃO DO E-MAIL
    // ===============================

    const email = form.email;

    if (email) {

        email.addEventListener("input", () => {

            const feedback = document.getElementById("form-feedback");

            if (!feedback) {
                return;
            }

            if (email.validity.valid) {
                feedback.textContent = "E-mail válido.";
            } else {
                feedback.textContent = "Digite um e-mail válido.";
            }

        });

    }

}