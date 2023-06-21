import app from './src/app';

const port = 2727;

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
});