const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

//FAZER QUANDO COLOCAR EM PRODUÇÃO PARA LIBERAR UM ENDEREÇO ESPECIFICO.
// app.use(cors({
//     origin: 'https://meusite.com'
// }));

app.use(cors());

app.use(express.json());
app.use(routes);



app.listen(3333);