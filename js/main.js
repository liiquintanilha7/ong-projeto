import {
    inicioTemplate,
    projetosTemplate,
    cadastroTemplate
} from "./templates.js";

import { criarRouter } from "./router.js";

import { inicializarFormulario } from "./form.js";

const app = document.getElementById("app");

const routes = {
    "/index.html": inicioTemplate(),
    "/projetos.html": projetosTemplate(),
    "/cadastro.html": cadastroTemplate()
};

criarRouter(app, routes, inicializarFormulario);