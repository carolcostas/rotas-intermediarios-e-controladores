import 'dotenv/config';
import  Express, { Request, Response }  from "express";

const app = Express()

const controlador = (req: Request, res: Response) => {
    console.log(req.params.item)
    res.send("Hello World!")
}


app.get("/?:item", controlador)

app.listen(process.env.PORT)