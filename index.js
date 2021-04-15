const express = require('express');
const cors = require('cors');

const userRouter = require('./routers/userRouters');
const characterRouter = require('./routers/characterRouters');
const comicsRouter = require('./routers/comicsRouter');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', userRouter, characterRouter, comicsRouter);

app.listen(port, () => console.log(`API rodando na porta ${port}`));
