// ESTRUTURA DE REACT COM TS

/*
ºA estrutura de React quando adicionamos TS não muda muito;
ºTemos as pastas clássicas como: node_modules, src e public;
ºEm src que as coisas ficam diferentes, temos a criação de arquivos ..tsx;
que são arquivos jsx porém com a possibilidade de aplicação das funcionalidades
de TS;
ºpodemos executar o projeto com npm rum start;
*/

// CRIAÇÃO DE VARIÁVEIS EM COMPONENTES

/*
º Podemos criar variáveis dentro dos componentes;
º E elas podem receber os tipos que já vimos até este momento do curso;
º isso nos permite trabalhar com JSX com apoio destas variáveis e seus tipos
  vamos ver na prática.
*/

// CRIAÇÃO DE FUNÇÕES EM COMPONENTES

/*
º Podemoss também criar funções em componentes;
º Estas funções recebem parâmetros, que podem ser tipados;
º E o seu retorno também;
º Ou seja, podemos aplicar os mesmos conceitos que já vimos de TS
  Vamos ve na prática!
*/

// EXTENSÃO PARA REACT COM TS

/*
º A extensão que vamos utilizar é a TypeScript React code snippets
º Ela nos ajuda com atalhos para programar mais rápido;
º Como o tsrafce, que cria um componente funcional;
º Isso torna o nosso dia a dia mais simples;
  Vamos ver na prática!
*/

// IMPORTANDO COMPONENTES

/*
  º A importação de componente funciona da mesma forma que sem 
  TypeScript
  º Porém temos que nos atentar aos valores e tipos das props de cada
  componente;
  º O TS interage de forma mais sucinta naparte da importação;
  Vamos ver na prática.
*/

// DESTRUCTURING NAS PROPS

/*
  º O destructuring é um recurso de ES6, que permite separar um array 
  ou objeto em várias variáveis;
  º Aplicamos esta técnica nas props, para não precisar repetir o nome
  do objeto sempre;
  º Podemos fazer desta maneira em TS também;
*/

// O HOOK USEsTATE

/*
  º O useState é um hook muito utilizado em React;
  º Serve para consultar e alterar o estado de algum dado;
  º Atrelamos a uma função set a um evento, como mudança dedado input e 
  alteramos o valor da variável base;
  º Podemos adaptar este recurso para TS também;
  vamos ver na prática!
*/

// ENUM

/*
º O Enum é uma forma interessante de formatar um onjeto com chaves e valores
º Onde podemos utilizar como props;
º Passando a chave pela prop, imprimimos o valor dela no componente;
  vamos ver na prática!
*/

// TYPES

/*
  º Além das interfaces, podemos criar estruturas de tipos com o type;
  º Isso nos permite criar dados com tipos de dados fixos;
  º Ou até tipos customizados, como quando utilizamos o operador |
    Vamos ver na prática!
*/

// CONTEXT API

/*
  º A Context API, é uma forma de transmitir dados entre componentes no React
  º A ideia principal é que podemos determinar quais componentes recebem estes dados
  º ou seja, fazem parte do contexto;
  º Podemos aplicar TS a esta funcionalidade também;
  Vamos ver na prática
*/

// UTILIZANDO O DADO DE CONTEXTO
/*
  ºUtilizando o dado de contexto
  º Para utilizar os dados do contexto vamos precisar de um hook;
  º Que é o useContext;
  º A partir dele conseguimos extrair os dados e utilizar em um componente
  vamos ver na prática
*/
