import  Express, { Request, Response }  from "express";

const app = Express()

const controlador = (req: Request, res: Response) => {
    res.send("Hello World!")
}


app.get('/', controlador)

app.listen(process.env.port)