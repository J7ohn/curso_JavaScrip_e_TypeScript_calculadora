# Calculadora em JavaScript e HTML

Este projeto é uma calculadora simples desenvolvida com HTML, CSS e JavaScript, apresentando duas abordagens diferentes de implementação: uma com **Função Fábrica** e outra com **Função Construtora**. Cada versão utiliza conceitos distintos de programação orientada a objetos em JavaScript para criar a funcionalidade da calculadora. Isso é ideal para mim que estou aprendendo sobre padrões de criação de objetos e manipulação de eventos no JavaScript.

## Funcionalidades da Calculadora

A calculadora tem as seguintes funcionalidades:

- **Operações matemáticas básicas**: permite operações como soma, subtração, multiplicação e divisão.
- **Botões interativos**: os botões adicionam números ou operações ao display da calculadora.
- **Tecla Backspace**: é possível apagar o último dígito ou caractere inserido no display.
- **Tecla Enter**: realiza a operação matemática exibida no display.
- **Validação de entrada**: a calculadora valida as expressões matemáticas para evitar erros e impedir a execução de operações inválidas.
- **Função Clear**: limpa o display para começar uma nova operação.

## Estrutura do Código

Este projeto contém dois arquivos JavaScript, cada um abordando um estilo diferente de criação de objetos:

1. **Função Fábrica** (`criaCalculadora`) — Esse estilo de função permite criar múltiplas instâncias do mesmo objeto, retornando um novo objeto sempre que a função é chamada. Ele facilita a criação de propriedades e métodos específicos a cada instância, encapsulando a lógica e o estado do objeto dentro da função.
2. **Função Construtora** — Nesse estilo, uma função construtora (com a palavra-chave `new`) é usada para criar objetos, sendo uma abordagem comum para quem deseja usar uma forma mais clássica de OOP (programação orientada a objetos) em JavaScript.

### Trechos de Código - Função Fábrica

O código acima mostra a implementação da calculadora com uma **Função Fábrica**. Abaixo, algumas das principais seções do código:

- **Método `inicia()`**: Responsável por inicializar a calculadora, configurando eventos para os botões e teclas.
- **Método `realizaConta()`**: Faz o cálculo da expressão digitada no display e apresenta o resultado, após uma verificação de segurança com regex para validar os caracteres.
- **Eventos de Teclado**: Foram adicionados eventos para as teclas "Enter" e "Backspace", possibilitando uma experiência de uso similar à de uma calculadora física.

## O Que eu aprendi:

Este projeto oferece uma ótima oportunidade para desenvolver conhecimentos em:

1. **Manipulação do DOM**: Interações com o DOM, como a captura e manipulação de eventos de clique, para gerar feedback em tempo real para o usuário.
2. **Programação Funcional e Orientada a Objetos**: Comparação entre Funções Fábricas e Funções Construtoras, entendendo como diferentes abordagens afetam a estrutura e flexibilidade do código.
3. **Eventos de Teclado**: A detecção de teclas pressionadas com `keydown` e `keyup`, especialmente com códigos de tecla para Backspace e Enter.
4. **Validação de Dados com Regex**: Uso de expressões regulares para garantir que o input do usuário é seguro, evitando erros com a função `eval()` e aumentando a segurança do código.
5. **Tratamento de Erros**: Implementação do `try...catch` para tratar possíveis erros de execução e oferecer feedback ao usuário.

## Como Usar

1. Clone o repositório ou copie o código HTML e JavaScript para seu ambiente local.
2. Inclua o arquivo JavaScript no HTML.
3. Abra o HTML em seu navegador para utilizar a calculadora.
