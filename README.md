# Marvel Store

## Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Testes](#testes)
- [Possíveis Melhorias](#possíveis-melhorias)
- [Desafios e Aprendizados](#desafios-e-aprendizados)
- [Observação sobre a API](#observação-sobre-a-api)
- [Deploy](#deploy)

---

## Sobre o Projeto

Este projeto é um desafio técnico para vaga de desenvolvedor Front-End Júnior. O objetivo é simular uma loja de HQs da Marvel, com funcionalidades de listagem, detalhes, carrinho, cupons de desconto e responsividade.

---

## Estrutura de Pastas

- **components/**
  - `ComicCard/`
  - `Header/`
- **contexts/**
- **pages/**
  - `Cart/`
  - `ComicDetail/`
  - `Home/`
  - `NotFound/`
- **services/**
- **styles/**

> Os estilos dos componentes estão separados dos arquivos `index.tsx` para manter o código mais limpo e organizado.

---

## Funcionalidades

- Listagem de HQs mockadas
- Página de detalhes de cada HQ
- Distintivo de HQ rara (10% de chance, definido matematicamente)
- Carrinho de compras com seleção de quantidade
- Aplicação de cupons de desconto (comum e raro)
- Responsividade (mobile first)
- Página de NotFound para rotas inválidas

---

## Tecnologias Utilizadas

- **ReactJS** para construção da interface
- **Styled-Components** para estilização dos componentes
- **React Router** para navegação entre páginas
- **ContextAPI** para gerenciamento do carrinho

---

## Como Rodar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Rode o projeto com `npm start`
4. O projeto será aberto em `http://localhost:3000`

O deploy será realizado no Vercel: 

---

## Testes

Foram realizados apenas testes manuais.  
Não utilizei ferramentas como Cypress, pois ainda não possuo conhecimento suficiente. Preferi focar no que domino e garantir a qualidade através de testes exploratórios e uso da documentação.

---

## Possíveis Melhorias

- Implementar testes automatizados (unitários e de integração)
- Melhorar acessibilidade
- Adicionar animações e transições
- Implementar autenticação de usuário
- Integração com a API real da Marvel

---

## Desafios e Aprendizados

- Tive dificuldades para relembrar alguns conceitos, mas a documentação foi fundamental durante todo o desenvolvimento.
- Enfrentei grandes problemas com a API da Marvel, mesmo testando no Postman e outras ferramentas, não consegui realizar a conexão.
- O uso de dados mockados foi essencial para conseguir avançar no desafio e estruturar o projeto de forma flexível para futura integração com a API real.

---

## Observação sobre a API

Devido a problemas técnicos com a API da Marvel durante o desenvolvimento, utilizei dados mockados que simulam:
- Paginação
- HQs raras (10% aleatórios)
- Estrutura de preços

A implementação está pronta para substituição pela API real quando necessário.

---

## Cupons Mockados  
- **Comum**: `DESCONTO20` (20% off em HQs comuns).  
- **Raro**: `RARO15` (15% off em HQs raras).  

## Deploy

O projeto será publicado no Vercel.  
Link: 