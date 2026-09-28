## ONG Esperança

Projeto web desenvolvido para uma organização do terceiro setor, com o objetivo de apresentar iniciativas sociais e possibilitar o cadastro de pessoas interessadas em participar das ações da ONG.

## Sobre o projeto

A plataforma foi desenvolvida utilizando HTML5, CSS3 e JavaScript, com foco em organização, acessibilidade, responsividade e experiência do usuário.

O projeto possui três páginas principais:

- Início: apresentação da ONG, seus objetivos e impacto social.
- Projetos: apresentação das iniciativas e ações sociais.
- Cadastre-se: formulário para pessoas interessadas em participar.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git e GitHub
- LocalStorage

## Estrutura do projeto

```text
ong-projeto/
├── css/
│   └── style.css
├── imagens/
│   ├── doacao.jpg
│   ├── doacao.webp
│   ├── ong.jpg
│   ├── ong.webp
│   ├── voluntarios.jpg
│   └── voluntarios.webp
├── js/
│   ├── form.js
│   ├── main.js
│   ├── router.js
│   ├── storage.js
│   └── templates.js
├── cadastro.html
├── index.html
├── projetos.html
└── README.md
```

## Funcionalidades

- Navegação entre as páginas do projeto.
- Layout responsivo para diferentes tamanhos de tela.
- Menu adaptado para dispositivos móveis.
- Apresentação dos projetos sociais.
- Formulário de cadastro com validações.
- Armazenamento dos dados do formulário utilizando LocalStorage.
- Organização do JavaScript em módulos.
- Interface desenvolvida com foco em acessibilidade e usabilidade.

## Organização do JavaScript
O código foi dividido por responsabilidades:

- `main.js` — inicialização da aplicação.
- `router.js` — gerenciamento da navegação.
- `templates.js` — criação dos conteúdos das páginas.
- `form.js` — gerenciamento do formulário.
- `storage.js` — armazenamento e recuperação dos dados.

## Estratégia de desenvolvimento

A organização modular foi realizada de forma incremental, utilizando uma branch específica para a funcionalidade feature/modularizacao-js antes de sua integração à linha de desenvolvimento develop.

## Controle de versão
O projeto utiliza Git e GitHub para controle de versão e organização do desenvolvimento.

Foi adotada uma estrutura baseada no GitFlow, utilizando:

- `master` — versão estável do projeto.
- `develop` — linha de desenvolvimento contínuo.
- `feature/modularizacao-js` — desenvolvimento específico relacionado à modularização do JavaScript.

## Versionamento

Foi adotado o versionamento semântico no padrão MAJOR.MINOR.PATCH.

- **MAJOR:** mudanças estruturais ou incompatíveis.
- **MINOR:** novas funcionalidades ou melhorias compatíveis.
- **PATCH:** correções e ajustes menores.

## Issues e Milestones
O GitHub também foi utilizado para organizar as atividades do projeto por meio de Issues e Milestones.

Foi criado o Milestone:

v1.0.0 - Entrega Final ONG Esperança

Entre as atividades registradas estão:

- Revisar responsividade e acessibilidade.
- Organizar estrutura modular do JavaScript.

## Objetivo acadêmico

O projeto foi desenvolvido como parte de uma experiência prática de desenvolvimento Front-end, aplicando conceitos de HTML semântico, CSS, responsividade, acessibilidade, JavaScript, modularização e controle de versão com Git e GitHub.

Autora

Lidiane Quintanilha