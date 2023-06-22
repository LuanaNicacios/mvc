/*PAGINA DE ABERTURA*/
import Router from 'express';


const router = Router(); //função utilizada no express que roteia o caminho utilizado na API// 

router.get("/", function (req, res) { //req= requisição res= resposta A barra indica que é a página padrão (chamada de end point), vai sempre mostrar a mensagem de boas vindas. Ex: nlaksdalkdjasda.com.br//
    res.status(200).send({
        title: "Hello World! n/Bem vindas a turma Devas Full stack",
        version: "1.0.0"
    })
})
export default router;