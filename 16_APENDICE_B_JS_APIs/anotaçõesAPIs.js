// O QUE É UMA API
/*
  API é um acrônimo para Interface de Programação de Aplicações
  ( Applicaation Programming Interface );
  Uma forma simples de comunicação entre aplicações;
  Não necessita de telas, respostas geralmente são em JSON;
  Indepedente do front-end, a API não passui ligação com o front;
  Baseadas em requisição e resposta;
  Podemos criar uma API com Express!
*/

// O QUE É REST E RESTful?
/*
REST significa Representational State Transfer ou Transferência Representacional
de Estado;
Um estilo de arquitetatura, que define como as APIs devem ser criadas;
Seguindo todos os padrões a API é considerada RESTful;
Alguns dos pontos são: respostas unifores, sem ligação de estado,
cache de respostas e outros;
Ao longo do curso focaremos em seguir estes padrões
*/

// O QUE É UMA SPA
/*
SPA significa Single Page Aplication;
É quando a aplicação possui um front-end separado ddo back-end;
Ou seja, uma API para o back-end;
E um framework front-end JS, como: React, Vue ou Angular;
Aplicações deste tipo estão dominando o mercado;
E as sessões seguintes tem como objetivo trabbalhar focadas em SPA;
A arquitetura anteriormente utilizada é conhecida como Monolith;
*/

// VERBOS HTTP
/*
Os verbos HTTP andam de mão dadas com as APIs, e fazem parte do REST;
Temos métodos como: GET, POST, PUT, DELETE, PATCH e etc;
Cada um representa uma ação na API, ou seja, são essenciais;
É muito importante que as nossas funcionalidades usem os métodos corretos;
Enviamos o método através da requisição;
*/

// CRIANDO UMA API COM EXPRESS
/*
Para criar a API teremos uma tarefa bem simples, comparada a estrutura com 
Handlebars;
Basta instalar o Express, ele fará tudo sozinho neste ponto;
Depois criamos uma rota que respondeem JSON, este é o dado de comunicação entre
aplicação e API;
è importante definir o verbo correto, como GET ou POST, por ex;
Vamos ver na prática!
*/

// CONHECENDO O POSTMAN
/*
O postman é um client para testes de API;
Podemos então criar o back-end antes ou separado do front só com a ajuda deste
software;
Como voçê deve imaginar, é fundamental quando estamos criando APIs;
Podemos simular verbos, corpo de requisição, inserir headers, tudo que é 
possível com uma aplicação web;
Vamos instalar!
*/

// CRIANDO UMA ROTA DE POST
/*
Para criar a rota de POST vamos utilizar o método post do Express;
Podemos extrair os dados da requisição, acessando req.body;
Da mesma maneira que no get, podemos retornar uma resposta como JSON pela API
Vamos ver na prática!
*/

// ADICIONANDO STATUS NA RESPOSTA
/*
Os status podem ajudar no desenvolvimento da nossa aplicação;
Exibindo mensagens de sucesso ou erro, por exemplo;
Precisamos entre res e o método json definir um número de status
HTTP;
Isso é feito por meio do método status;
Vamos ver na prática!
*/
