import 'dotenv/config';
import express, { Request, Response, Express } from 'express';

const app: Express = express();

const pessoas = [
    { nome: "carol", email: "carol@email.com" },
    { nome: "lucas", email: "lucas@email.com" },
    { nome: "isabella", email: "isabella@email.com" }
];

const controlador = (req: Request, res: Response): Response => {
    const { email } = req.params;
    const pessoa = pessoas.find(item => item.email === email);

    if (!pessoa) {
        return res.send("Pessoa não encontrada!");
    }
    return res.send(pessoa);
};

app.get("/usuarios/:email", controlador);


app.listen(process.env.PORT)