export function criarRouter(app, routes, inicializarFormulario) {

    function normalizarRota(pathname) {
        const partes = pathname.split("/");
        const arquivo = partes[partes.length - 1];

        if (arquivo === "") {
            return "/index.html";
        }

        return `/${arquivo}`;
    }

    function render(pathname) {
        const route = normalizarRota(pathname);
        const content = routes[route];

        if (content) {
            app.innerHTML = content;

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

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (!link) return;

        const url = new URL(link.href);

        if (url.origin !== window.location.origin) return;

        event.preventDefault();

        history.pushState({}, "", url.pathname);

        render(url.pathname);
    });

    window.addEventListener("popstate", () => {
        render(window.location.pathname);
    });

    render(window.location.pathname);
}