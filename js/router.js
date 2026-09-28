// ===============================
// ROTEAMENTO DA APLICAÇÃO
// ===============================

export function criarRouter(app, routes, inicializarFormulario) {

    // ===============================
    // RENDERIZAR PÁGINA
    // ===============================

    function render(route) {

        const content = routes[route];

        if (content) {

            app.innerHTML = content;

            // Se for a página de cadastro,
            // inicializa o formulário
            if (route === "/cadastro.html") {
                inicializarFormulario();
            }

        } else {

            app.innerHTML = `
                <section>
                    <h2>Página não encontrada</h2>
                    <p>A página solicitada não foi encontrada.</p>
                </section>
            `;

        }
    }


    // ===============================
    // NAVEGAÇÃO DOS LINKS
    // ===============================

    document.addEventListener("click", (event) => {

        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        const url = new URL(link.href);

        // Não interfere em links externos
        if (url.origin !== window.location.origin) {
            return;
        }

        event.preventDefault();

        const route = url.pathname;

        history.pushState({}, "", route);

        render(route);
    });


    // ===============================
    // BOTÕES VOLTAR / AVANÇAR
    // ===============================

    window.addEventListener("popstate", () => {

        render(window.location.pathname);

    });


    // ===============================
    // CARREGAR PÁGINA INICIAL
    // ===============================

    render(window.location.pathname);

}