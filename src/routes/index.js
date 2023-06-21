/*PAGINA DE ABERTURA*/
import express from 'express';
const router = express.Router; //função utilizada no express que roteia o caminho utilizado na API// 
router.get("/", function (req, res) { //A barra indica que é a página padrão (chamada de end point), vai sempre mostrar a mensagem de boas vindas. Ex: nlaksdalkdjasda.com.br//
    res.status(200).send({
        title: "Bem vindas a turma Devas Full stack",
        version: "1.0.0"
    })
})
export default router;