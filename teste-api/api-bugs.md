## BUG-01 - Resposta de erro diferente da documentação 

### Informações:

Campo          | Valor              |
---------------|--------------------|
ID relacionado | API-03             |
Método         | GET                |
Endpoint       | /api/produtos/{id} |
Severidade     | Média              |
Gravidade      | Média              |

### Passo para reprodução:

1. Selecionar o método GET. 
2. Informar o endpoint /api/produtos/p009, considerando que o produto não existe.
3. Enviar a requisição.
4. Avaliar a estrutura da resposta recebida.

### Resultado Esperado:

A requisição deve retornar o status 404, conforme definido para produto inexistente. Além disso, a documentação estabelece que todo erro da API deve seguir o formato padronizado:
{
  "erro": {
    "codigo": "QUANTIDADE_INVALIDA",
    "mensagem": "A quantidade deve ser um número inteiro maior ou igual a 1.",
    "campo": "itens[0].quantidade"
  }
}

### Resultado Obtido:

A API retornou o status 404, porém a estrutura da resposta não segue integralmente o formato de erro documentado:
{
    "erro": {
        "codigo": "PRODUTO_NAO_ENCONTRADO",
        "mensagem": "Produto p009 não encontrado."
    }
}
O campo "campo", previsto no formato padronizado de erros da documentação, não está presente na resposta.

### Evidência:

- [Evidência-01](/teste-api/evidencias-bug/bug01-api03.png)


## BUG-02 - Cálculo do frete para subtotal de R$ 200,00 incorreto

### Informações:

Campo          | Valor                 |
---------------|-----------------------|
ID relacionado | API-13-CA06           |
Método         | POST                  |
Endpoint       | api/carrinho/calcular |
Severidade     | Alta                  |
Gravidade      | Alta                  |

### Passo para reprodução:

1. Selecionar o método POST 
2. Informar o endpoint api/carrinho/calcular
3. Enviar a requisição no body: 
    {
    "itens": [
        { "produtoId": "P005", "quantidade": 2 }
    ]
    }
4. Avaliar a estrutura da resposta recebida.

### Resultado Esperado:

O frete deve ser gratuito para compras de subtotal igual à R$ 200,00.

### Resultado Obtido:

Foi cobrado um frete de R$ 19,90 compras de subtotal exatamente igual à R$ 200,00.

### Evidência:

- [Evidência-01](/teste-api/evidencias-bug/bug02-api13.png)

## BUG-03 - Limitar mais de 5 unidades do mesmo produtos

### Informações:

Campo          | Valor                 |
---------------|-----------------------|
ID relacionado | API-19-CA10           |
Método         | POST                  |
Endpoint       | api/carrinho/calcular |
Severidade     | Alta                  |
Gravidade      | Alta                  |

### Passo para reprodução:

1. Selecionar o método POST 
2. Informar o endpoint api/carrinho/calcular
3. Enviar a requisição no body: 
    {
    "itens": [
        { "produtoId": "P005", "quantidade": 6 }
    ]
    }
4. Avaliar a estrutura da resposta recebida.

### Resultado Esperado:

API deve impedir a inclusão de quantidade superior a 5 unidades do mesmo produto e retornar o status 422.

### Resultado Obtido:

A API retornou 200 e permitiu a quantidade de 6 unidades.

### Evidência:

- [Evidência-01](/teste-api/evidencias-bug/bug03-api19.png)