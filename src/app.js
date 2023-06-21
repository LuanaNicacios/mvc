import express from 'express';

const app = express(); //esta variavel recebe o express e será usada em outros arquivos//
app.use(express.json());
app.use("/", index); //Essa barra significa que o index será a "página inicial/padrão".//

export default app // usado para exportar a const app// 