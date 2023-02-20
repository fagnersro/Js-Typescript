import React, { createContext } from 'react';

// 4  IMPORTAÇÃO DE COMPONENTES
import FirstComponent from './components/FirstComponent';

//5 DESESTRUTURANDO PROPS
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 USESTATE
import State from './components/State';

//10 UTILIZANDO CONTEXTO
import Context from './components/Context';

// 8  TYPES
type textOrNull = string | null;
type fixed = 'Isso' | 'Ou' | 'Aquilo';

// 9 CONTEXT API
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - VARIAVEIS
  const name: string = 'Fagnersro';
  const age: number = 30;
  const isWorking: boolean = false;

  // 2 FUNÇÕES

  const userGreeting = (name: string): string => {
    return `Olá sr. ${name}`;
  };

  // 8 TYPES
  const myText: textOrNull = 'Tem algum texto aqui';
  let mySecondText: textOrNull = null;

  mySecondText = 'opa';

  const testandoFixed: fixed = 'Isso';

  // 9 CONTEXT API
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Henriquesro" />
        <Destructuring
          title="Primeiro post"
          content="Alguma conteúdo"
          commentsQty={10}
          tags={['TS', 'JS']}
          category={Category.TS}
        />

        <Destructuring
          title="Segundo post"
          content="Mais outro conteúdo"
          commentsQty={5}
          tags={['Pyton']}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texno na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
