# rotas-intermediarios-e-controladores

**Etapas de uma Requisição HTTP**

Quando um cliente (como um navegador) deseja acessar um recurso na web, ele segue um processo estruturado para enviar uma requisição ao servidor. As etapas desse processo são as seguintes:

1. **Envio da Requisição**:
    - O cliente inicia o processo enviando uma requisição HTTP para o servidor. Essa requisição indica a ação que o cliente deseja realizar.
2. **Chegada ao Roteador**:
    - Ao chegar no servidor, a primeira parada da requisição é no **roteador**. O roteador é responsável por analisar a requisição e direcioná-la para a rota apropriada, que foi configurada previamente.
3. **Direcionamento para o Controlador**:
    - Com base na rota definida, o roteador encaminha a requisição para o **controlador** correspondente. Cada controlador é responsável por processar uma parte específica da lógica da aplicação, como listar usuários ou gerenciar produtos.
4. **Processamento da Requisição**:
    - O controlador recebe a requisição e processa as informações contidas nela. Isso pode incluir interações com bancos de dados, validações e outras lógicas de negócio.
5. **Envio da Resposta**:
    - Após processar a requisição, o controlador gera uma resposta e a envia de volta ao cliente. Essa resposta geralmente inclui um código de status HTTP (como 200 para sucesso ou 404 para não encontrado) e os dados solicitados.
6. **Recepção da Resposta pelo Cliente**:
    - Por fim, o cliente recebe a resposta do servidor e a exibe ao usuário, completando o ciclo de comunicação.



## Executando TypeScript com Node.js

Para executar arquivos TypeScript no Node.js, utilize o comando:

```bash
ts-node

```

## Parâmetros de Rota (Path Params)

Os parâmetros de rota, também conhecidos como *path parameters*, são utilizados para capturar valores dinâmicos na URL de uma rota. Esses parâmetros são definidos com `:` antes do nome do parâmetro, e podem ser acessados dentro da função de requisição.

### Exemplo de Uso

No exemplo abaixo, configuramos uma rota em Express para capturar um parâmetro dinâmico chamado `parametro`:

```tsx

app.get("/servidor/:parametro", (req, res) => {
  return res.send("Mensagem de retorno");
});

```

### Como Funciona

Ao acessar a URL `http://localhost:3000/servidor/teste`, o valor de `teste` será passado como parâmetro para a rota, sendo possível acessá-lo com `req.params.parametro`. Se incluirmos `console.log(req.params.parametro);` no código, o console exibirá:

```
{ parametro: "teste" }

```

Esse recurso permite que desenvolvedores capturem valores variáveis diretamente da URL, facilitando a criação de rotas dinâmicas.
