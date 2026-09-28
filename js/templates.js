// ===============================
// DADOS DOS PROJETOS
// ===============================

const projetos = [
    {
        titulo: "Campanha de Doação",
        imagem: "imagens/doacao.jpg",
        descricao:
            "A campanha de doação arrecada alimentos e outros recursos para apoiar famílias em situação de vulnerabilidade."
    },
    {
        titulo: "Programa de Voluntariado",
        imagem: "imagens/voluntarios.jpg",
        descricao:
            "O programa de voluntariado permite que pessoas contribuam com seu tempo e suas habilidades em ações sociais e comunitárias."
    }
];


// ===============================
// TEMPLATE DA PÁGINA INICIAL
// ===============================

export function inicioTemplate() {

    return `
        <section class="hero">

            <div class="hero-content">

                <span class="hero-label">
                    ONG ESPERANÇA
                </span>

                <h2>
                    Transformando esperança
                    em ação.
                </h2>

                <p>
                    Juntos podemos fazer a diferença e contribuir
                    para uma sociedade mais solidária.
                </p>

                <div class="hero-actions">

                    <a
                        href="projetos.html"
                        class="button button-primary"
                    >
                        Conheça nossos projetos
                    </a>

                    <a
                        href="cadastro.html"
                        class="button button-secondary"
                    >
                        Quero participar
                    </a>

                </div>

            </div>

            <div class="hero-image">

                <img
                    src="imagens/ong.jpg"
                    alt="Pessoas unindo as mãos em uma ação social"
                >

            </div>

        </section>


        ${impactoTemplate()}

        ${projetosDestaqueTemplate()}
    `;
}


// ===============================
// SEÇÃO DE IMPACTO
// ===============================

function impactoTemplate() {

    return `
        <section class="impact">

            <div class="section-heading">

                <span class="section-label">
                    NOSSO IMPACTO
                </span>

                <h2>
                    Pequenas ações podem transformar vidas
                </h2>

                <p>
                    Cada contribuição ajuda a fortalecer nossas ações
                    e ampliar o alcance da ONG Esperança.
                </p>

            </div>


            <div class="impact-grid">

                <article class="impact-card">

                    <span class="impact-number">
                        +150
                    </span>

                    <h3>
                        Famílias apoiadas
                    </h3>

                    <p>
                        Famílias beneficiadas pelas nossas ações sociais.
                    </p>

                </article>


                <article class="impact-card">

                    <span class="impact-number">
                        +40
                    </span>

                    <h3>
                        Voluntários
                    </h3>

                    <p>
                        Pessoas que dedicam seu tempo para ajudar.
                    </p>

                </article>


                <article class="impact-card">

                    <span class="impact-number">
                        +12
                    </span>

                    <h3>
                        Ações realizadas
                    </h3>

                    <p>
                        Iniciativas desenvolvidas junto à comunidade.
                    </p>

                </article>

            </div>

        </section>
    `;
}


// ===============================
// PROJETOS EM DESTAQUE
// ===============================

function projetosDestaqueTemplate() {

    return `
        <section class="featured-projects">

            <div class="section-heading">

                <span class="section-label">
                    NOSSOS PROJETOS
                </span>

                <h2>
                    Conheça nossas iniciativas
                </h2>

                <p>
                    Descubra como a ONG Esperança atua para transformar
                    vidas e fortalecer a comunidade.
                </p>

            </div>


            <div class="featured-grid">

                <article class="featured-card">

                    <div class="featured-image">

                        <img
                            src="imagens/doacao.jpg"
                            alt="Voluntários organizando doações"
                        >

                    </div>


                    <div class="featured-content">

                        <div class="badges">

                            <span class="badge badge-success">
                                Ativo
                            </span>

                            <span class="badge badge-info">
                                Projeto social
                            </span>

                        </div>

                        <h3>
                            Campanha de Doação
                        </h3>

                        <p>
                            A campanha de doação arrecada alimentos
                            e outros recursos para apoiar famílias
                            em situação de vulnerabilidade.
                        </p>

                        <a
                            href="projetos.html"
                            class="project-link"
                        >
                            Saiba mais →
                        </a>

                    </div>

                </article>


                <article class="featured-card">

                    <div class="featured-image">

                        <img
                            src="imagens/voluntarios.jpg"
                            alt="Voluntários participando de uma ação social"
                        >

                    </div>


                    <div class="featured-content">

                        <div class="badges">

                            <span class="badge badge-success">
                                Ativo
                            </span>

                            <span class="badge badge-info">
                                Projeto social
                            </span>

                        </div>

                        <h3>
                            Programa de Voluntariado
                        </h3>

                        <p>
                            O programa de voluntariado permite que
                            pessoas contribuam com seu tempo e suas
                            habilidades em ações sociais e comunitárias.
                        </p>

                        <a
                            href="projetos.html"
                            class="project-link"
                        >
                            Saiba mais →
                        </a>

                    </div>

                </article>

            </div>

        </section>
    `;
}


// ===============================
// TEMPLATE DA PÁGINA DE PROJETOS
// ===============================

export function projetosTemplate() {

    const projetosHTML = projetos
        .map(projetoTemplate)
        .join("");


    return `
        <section class="projects-page">

            <div class="section-heading">

                <span class="section-label">
                    NOSSAS INICIATIVAS
                </span>

                <h2>
                    Projetos e Iniciativas Sociais
                </h2>

                <p>
                    Conheça nossas ações e descubra como você pode
                    contribuir para transformar vidas.
                </p>

            </div>


            <div class="projects-grid">

                ${projetosHTML}

            </div>

        </section>
    `;
}


// ===============================
// TEMPLATE DE CADA PROJETO
// ===============================

function projetoTemplate(projeto) {

    return `
        <article class="project-card">

            <div class="project-image">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}"
                >

            </div>


            <div class="project-content">

                <div class="badges">

                    <span class="badge badge-success">
                        Ativo
                    </span>

                    <span class="badge badge-info">
                        Projeto social
                    </span>

                </div>

                <h3>
                    ${projeto.titulo}
                </h3>

                <p>
                    ${projeto.descricao}
                </p>

                <a
                    href="cadastro.html"
                    class="project-link"
                >
                    Quero participar →
                </a>

            </div>

        </article>
    `;
}


// ===============================
// TEMPLATE DO CADASTRO
// ===============================

export function cadastroTemplate() {

    return `
        <section>

            <h2>
                Cadastre-se
            </h2>

            <p>
                Preencha o formulário para demonstrar seu
                interesse em participar.
            </p>


            <form id="cadastro-form">


                <!-- DADOS PESSOAIS -->

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>


                    <div class="form-group">

                        <label for="nome">
                            Nome:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                            required
                        >

                    </div>

                </fieldset>


                <!-- INFORMAÇÕES DE CONTATO -->

                <fieldset>

                    <legend>
                        Informações de contato
                    </legend>


                    <div class="form-group">

                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                            placeholder="(11) 99999-9999"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            pattern="[0-9]{5}-[0-9]{3}"
                            placeholder="00000-000"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="endereco">
                            Endereço:
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="estado">
                            Estado:
                        </label>

                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            required
                        >

                    </div>

                </fieldset>


                <!-- FORMA DE PARTICIPAÇÃO -->

                <fieldset>

                    <legend>
                        Forma de participação
                    </legend>


                    <div class="form-group">

                        <label for="participacao">
                            Como deseja participar?
                        </label>

                        <select
                            id="participacao"
                            name="participacao"
                            required
                        >

                            <option value="">
                                Selecione uma opção
                            </option>

                            <option value="doacao">
                                Doação
                            </option>

                            <option value="voluntariado">
                                Voluntariado
                            </option>

                        </select>

                    </div>

                </fieldset>


                <!-- BOTÃO -->

                <button type="submit">
                    Enviar cadastro
                </button>


                <!-- FEEDBACK -->

                <div
                    id="form-feedback"
                    role="status"
                ></div>


            </form>

        </section>
    `;
}