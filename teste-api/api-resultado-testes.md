#  Resultados dos Testes — API Verzel Store

## Resumo

| Total | Passaram | Falharam |
|-------|----------|----------|
| 26    | 23       | 03       |

## Detalhamento

### API-01-Listar todos os produtos

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | GET                                            |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-01.png)|

### API-02-Consultar produto existente pelo ID

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | GET                                            |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-02.png)|

### API-03-Consultar produto inexistente 

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | GET                                            |
Status esperado | 404                                           |
Status recebido | 404                                            |
Resultado       | ❌ Falhou                                     |
Evidência       |[Evidência-01](evidencias-de-testes/api-03.png) |
Bug             |BUG-01                                          |

### API-04-CA01-Cálculo do carrinho com cupom válido

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                            |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-04-ca01.png)|

### API-05-CA02-Cupom com letra minúscula

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-05-ca02.png)|

### API-06-CA02-Cupom com letra minúscula e maiúscula

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-06-ca02.png)|

### API-07-CA02-Cupom com espaço no início

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-07-ca02.png)|

### API-08-CA02-Cupom com espaço no final

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-08-ca02.png)|

### API-09-CA02-Cupom com espaço no inicio e final

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-09-ca02.png)|

### API-10-CA03-Cálculo do carrinho com cupom inexistente

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-10-ca03.png)|

### API-11-CA04-Cálculo do carrinho com cupom expirado

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-11-ca04.png)|

### API-12-Cálculo do carrinho com cupom vazio

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-12.png) |

### API-13-CA06-Frete grátis para subtotal igual a R$ 200,00

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ❌ Falhou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-13-ca06.png)|
Bug             | BUG-02                                           |

### API-14-CA06-Frete grátis para subtotal maior que R$ 200,00

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-14-ca06.png)|

### API-15-CA07-Frete fixo para subtotal menor que R$ 200,00

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-15-ca07.png)|

### API-16-CA08-Frete calculado antes do desconto

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-16-ca08.png)|

### API-17-CA09-Desconto não incide sobre o frete

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-17-ca09.png)|

### API-18-CA10-Permitir exatamente 5 unidades do mesmo produto

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 200                                            |
Status recebido | 200                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-18-ca10.png)|

### API-19-CA10-Limitar mais de 5 unidades do mesmo produto

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 200                                            |
Resultado       | ❌ Falhou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-19-ca10.png)|
Bug             | BUG-03                                         |

### API-20-Validar pedido com dados válidos

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 201                                            |
Status recebido | 201                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-20.png) |

### API-21-Pedido com cupom inválido

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 422                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-21.png) |

### API-22-Pedido com cupom expirado

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 422                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-22.png) |

### API-23-Pedido com nome incompleto

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 422                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-23.png) |

### API-24-Pedido com e-mail inválido

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 422                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-24.png) |

### API-25-Pedido com CEP menor de 8 dígitos

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 422                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-25.png) |

### API-26-Pedido com CEP maior de 8 dígitos

Campo           | Valor                                          |
----------------|------------------------------------------------|
Método          | POST                                           |
Status esperado | 422                                            |
Status recebido | 422                                            |
Resultado       | ✅ Passou                                      |
Evidência       | [Evidência-01](evidencias-de-testes/api-26.png) |

## Observações

A documentação não informa o status HTTP esperado ao informar uma quantidade superior ao limite de unidades do mesmo produto.

Foram identificados 3 falhas durante os testes de API: 

- API-03-Consultar produto inexistente
- API-13-CA06-Frete grátis para subtotal igual a R$ 200,00
- API-19-CA10-Limitar mais de 5 unidades do mesmo produto

Todos os bugs estão detalhados no arquivo api-bugs.md.
