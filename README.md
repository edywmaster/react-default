# React Default 2022

Este é um modelo de projeto template, para iniciar novos projetos React utilizando Next, Typescript e Stitches em 2022.

## Como esse projeto foi criado

Base do projeto utilizada:

- Para iniciar baixe o projeto [React Clean 2022](https://github.com/edywmaster/react-clean).

### Dependêcias para o projeto

LodaSH

```bash
npm install --save lodash.merge
# AND
npm i --save-dev @types/lodash.merge
```

Copy to clipboard

```bash
npm install --save-dev copy-to-clipboard
```

NextJS themes

```bash
npm install --save-dev next-themes
```

### Biblioteca Radix

Este projeto contém todos os componentes do Radix, mais só os seguites estão pré configurados:


Radix Id Provider

```bash
npm install --save-dev @radix-ui/react-id
```

Radix Tooltip

```bash
npm install --save-dev @radix-ui/react-tooltip
```

Radix Separator

```bash
npm install --save-dev @radix-ui/react-separator
```

### Biblioteca Radix Colors

```bash
npm install --save-dev @radix-ui/colors
```

### Biblioteca Radix Icons

```bash
npm install --save-dev @radix-ui/react-icons
```


### Biblioteca Stitches

Stitches é biblioteca para estilizar componentes ou criar design system. Saiba mais no site [Stitches.dev](https://stitches.dev/) ou Git [Stitches](https://github.com/modulz/stitches)


Instalação Stitches:

```bash
npm install --save-dev @stitches/react
```

Criar arquivo de configuração:

- Na raiz do projeto crie o arquivo `stitches.config.ts`


Criar arquivo server-side-render para o Next:

- Dentro da pasta `pages` criar arquivo `_document.tsx`;
