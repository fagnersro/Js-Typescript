// 1 INICIANDO PROJETO
// console.log('Express + TS!!!');

// 2 INIT EXPRESS
import express, { NextFunction, Request, Response } from 'express';

const app = express();

// 3 rotas com POST
app.use(express.json());

// 11 MIDDLEWARE PARA TODAS AS ROTAS
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get('/', (req, res) => {
  return res.send('Hello Express');
});

// 3  rotas com POST
app.post('/api/product', (req, res) => {
  console.log(req.body);
  return res.send('produto adicionado!');
});

// 4  ROTA PARA TODOS OS VERBOS

app.all('/api/product/check', (req, res) => {
  // req.method = VERBO HTTP

  if (req.method === 'POST') {
    return res.send('Inseriu algum registro');
  } else if (req.method === 'GET') {
    return res.send('Leu algum registro!');
  } else {
    return res.send('Não podemos realizar esta operação');
  }
});

// 5 INTERFACE DO EXPRESS

app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.send('Utilizando as interfaces');
});

// 6 ENVIANDO JSON
app.get('/api/json', (req: Request, res: Response) => {
  return res.json({
    name: 'Shirt',
    price: 30.0,
    color: 'Blue',
    sizes: ['P', 'M', 'G'],
  });
});

// 7 ROUTER PARAMETERS
app.get('/api/product/:id', (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === '1') {
    const product = {
      id: 1,
      name: 'Boné',
      price: 10,
    };

    return res.json(product);
  } else {
    return res.send('Produto não encontrado!');
  }
});

// 8  ROTAS COMPLEXAS

app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 9 ROUTER HANDLER

function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);

  return res.send('O usuário foi encontrado!');
}

app.get('/api/user/:id', getUser);

// 10  MIDDLEWARE
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === '1') {
    console.log('Pode seguir!');
    next();
  } else {
    console.log('Acesso restrito!');
  }
}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  return res.json({ msg: 'Bem-vindo a área administrativa!' });
});

// 12  REQ E RES COM GENERICS
app.get(
  '/api/user/:id/datails/:name',
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`ID: ${req.params.name}`);

    return res.json({ status: true });
  }
);

// 13 TRATANDO ERROS
app.get('/api/error', (req: Request, res: Response) => {
  try {
    // a nossa lógica
    throw new Error('Algo deu errado!');
  } catch (e: any) {
    res.status(500).json({ msg: e.mesage });
  }
});

app.listen(3000, () => {
  console.log('Aplicação de TS + Express funcionando!');
});
