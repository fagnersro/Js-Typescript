// INICIALIZAÇÃO
/*
  Para iniciar um projeto com Express e TypeScript precisamos criar o 
  projeto com npm init;
  E também iniciar o TS com npx tsc -init
  Após estes dois passos vamos instalar as dependências, algumas são 
  de dev (como os tipos) e outras não (como o Express)
  E por fim criamos um script e iniciamos a aplicação!

  utilizamos os seguintes comandos :
  
  npm init -y

  npx tsc --init

  npm install @types/express @types/node ts-node-dev typescript --save-dev

*/

// UTILIZANDO
/*
Para utilizar o express vamos importar o pacote
E criar ativá-lo em uma nova variável, geralmente chamada de app
Podemos criar uma rota que retorna uma mensagem;
Definir uma porta para a aplicação
E verificar o resultado no navegador
*/

// CONHECENDO O POSTMAN
/*
  O Postman é um client para testes de API;
  Podemos então criar o back-end antes ou separado do front só com a ajuda deste 
  software;
  Como você deve imaginar, é fundamental quando estamos criando APIs
  Podemos simular verbos, corpo de requisição, inserir headers, tudo
  que é possível com uma aplicação web;
  vamos instalar 
*/

// ROTEAMENTO
/* 
  Podemos utilizar qualquer verbo HTTP nas rotas do Express;
  Vamos criar uma que funcione a base de POST;
  Para isso precisamos trafegar dados em JSON, podemos fazer isso
  ativando um middleware;
  Iremos realizar os testes com o Postman
*/

// ROTA PARA QUALQUER VERBO
/*
  Utilizando o método all, podemos criar uma rota que aceita qualquer verbo
  É interessante para quando um enndpoint precisa realizar várias funções 
  Podemos criar um tratamento para entregar a resposta
  Vamos ver na prática!
*/

// INTERFACES DO EXPRESS
/*
  Para alinhar nossa aplicação ao TypeScript vamos adicionar novos
  tipos
  As request podem utilizar o tipo Request
  E as respostas o Response
  Vamos ver na prática
*/

// JSON COMO RESPOSTAS
/*
  Na maioria das vezes enviamos JSON para endpoints de API
  Para fazer isso com Express é facil 
  Basta enviar o JSON no método json de response
  Vamos ver na prática
*/

// ROUTER PARAMETERS
/*
  Podemos pegar parâmetros de rotas com Express
  Vamos utilizar req.params;
  A rota a ser criada precisa ser dinâmica
  Ou seja, os parâmetros que estamos querendo receber precisam estar no
  padrão :id
*/

// ROTAS MAIS COMPLEXAS
/*
  Podemos ter rotas com mais de um parâmetro
  Todos os dados continuam em req.params
  O padrão é: /algo/:param1/outracoisa/:param2
  Teremos então: param 1 e param2 em req;
  Vamos ver na prática
*/

// ROUTER HANDLER
/*
  Router handler é um recurso muito interessante para Express;
  Basicamente retiramos a função anônima de uma rota e externalizamos 
  em uma função;
  Podemos reaproveitar essa função, ou estrutura nossa aplicação desta maneira
  Vámos ver na prática
*/

//  MIDDLEWARE
/*
  Middleware é um recurso para executar uma função entre a execução de 
  uma rota, por exemplo
  O nosso app.use de json é um middleware;
  Podemos utilizar middleware para validações, por exemplo;
  Vamos ver na prática!
*/

// MIDDLEWARE PARA TODAS AS ROTAS
/*
  Para criar um middleware que é executado em todas as rotas vamos
  utilizar o método use
  Criamos uma função e atrelamos ao método;
  Desta maneira todas as rotas terão ação do nosso middleware;
  Vamos ver na prática
*/

// REQUEST E RESPONSE GENERICS
/*
  Podemos estabelecer os argumentos que vem pelo request e vão pela response
  Para isso vamos utilizar os Generics de Response e Request;
  Que são as interfaces disponibilizadas pelo Express
  Vamos ver na prática!
*/

// TRATANDO ERROS
/*
  Para tratar possíveis erros utilizamos blocos try catch;
  Desta maneira podemos detectar algum problema e retornar uma resposta para o usuário
  Ou até mesmo criar um log no sistema;
  Vamos ver na prática!
*/
