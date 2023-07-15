<img src="https://i.imgur.com/6q2AiRg.png" width="500">

## Sobre o Projeto

Este é um dos projetos de finalização do bootcamp de Desenvolvimento Web FullStack, baseado no teste técnico da empresa Promobit. O objetivo deste projeto é treinar para teste técnicos e revisar temas estudados do módulo de Frontend, bem como manipular dados utilizando a  API de filmes gratuita themoviedb em sua versão 3.

Neste projeto a maior dificuldade está sendo implementar a filtragem de filmes por gêneros. Apesar de não ser funcionalidade obrigatória e estar me tomando mais tempo de estudo, pesquisa e testes, tem sido um aprendizado interessante. Espero breve estar imprementado mais esta funcionalidade. 

Outra dificuldade que tive, foi em pouco tempo revisar boa parte do módulo de Frontend após seis meses estudando o backend.

## O Desafio

Usando a API de filmes gratuita themoviedb em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint GET /movie/popular para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint GET /movie/{movie_id}.

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada.

Siga o layout do figma sugerido. Não há necessidade de ser pixel perfect mas respeite a composição, fontes e cores.

## Requisitos Funcionais

- ✅ O usuário deve ter acesso a uma listagem dos filmes mais populares do dia.
- ✅ O usuário deve conseguir paginar a lista para encontrar novos filmes.
- ✅ O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem.
- ✅ A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa.

## Requisitos não Funcionais

- ✅ O app deverá ser criado usando React.
- ✅ Na raiz do projeto, será necessário incluir um arquivo README.md com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.
- ✅ O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge.
- ✅ O app deverá ser responsivo.

## Extras 

- [ ] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero.
- [ ] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido.
- [ ] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos.
  
## Stack Utilizada

![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![+ NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Deploy 

O deploy do projeto foi realizado utilizando a Vercel

URL do projeto em produção: https://case-promobit-3b7d.vercel.app/

## Documentação da API TMDB

[https://documenter.getpostman.com/view/22348177/2s93z86NDr
](https://developer.themoviedb.org/docs/getting-started)

## Layout do Figma

O layout deste projeto foi pré-estabelecido pela empresa aplicadora da seleção técnica - Promobit.

https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End

## Passos para rodar o projeto localmente
  
Clone o projeto via HTTPS

```bash
  git clone https://github.com/rafix923/case-promobit.git
```

Entre no diretório do projeto

```bash
-  cd case-promobit
```

Acesse o repositório raiz baixado

```bash
  cd frontend
```

Instale as dependências necessárias para esse projeto

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
 --- 
## Desenvolvedor
  
- [Rafael Lopes](https://github.com/rafix923)
