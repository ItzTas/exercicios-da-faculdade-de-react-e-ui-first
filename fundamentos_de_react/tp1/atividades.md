Exercício 1 Cálculo do Preço Total

Crie uma função chamada calcularPrecoTotal que receba dois números como parâmetros: o preço de um produto e a quantidade comprada. A função deve retornar o preço total do produto com base na quantidade. 

Exercício 2 Filtrar Produtos Disponíveis

Desenvolva uma função chamada filtrarDisponiveis que receba um array de objetos representando produtos, onde cada produto tem uma propriedade disponivel que é um booleano. A função deve retornar um novo array contendo apenas os produtos que estão disponíveis.

Exemplo de uso: 

Entrada:

const produtos = [ 
{ nome: "Laptop", disponivel: true }, 
{ nome: "Tablet", disponivel: false }, 
{ nome: "Smartphone", disponivel: true } 
];
Saída

[
{ nome: "Laptop", disponivel: true }, 
{ nome: "Smartphone", disponivel: true }
]
Exercício 3 Calcular Média de Avaliações

Desenvolva uma função chamada calcularMediaAvaliacoes que receba um array de números representando avaliações de um produto e retorne a média das avaliações. Utilize os métodos reduce e length para calcular a média.

Exercício 4 Filtrar Produtos Acima de um Preço

Crie uma função chamada filtrarAcimaPreco que receba um array de objetos representando produtos, onde cada produto tem uma propriedade preco. A função deve retornar um novo array contendo apenas os produtos com preço maior que um valor especificado.

Entrada:

const produtos = [ 
{ nome: "Laptop", preco: 1000 }, 
{ nome: "Tablet", preco: 400 }, 
{ nome: "Smartphone", preco: 1500 } 
];
Exemplo de chamada da função:

filtrarAcimaPreco(produtos, 600)
Saída

[
{ nome: "Laptop", preco: 1000 }, 
{ nome: "Smartphone", preco: 1500 }
]
Exercício 5 Encontrar um Produto por Nome

Desenvolva uma função chamada encontrarProdutoPorNome que receba um array de objetos representando produtos, onde cada produto tem uma propriedade nome. A função deve retornar o primeiro produto que tenha o nome especificado. Utilize o método find para localizar o produto. Teste a função com um array de produtos e um nome de produto.

Entrada:

const produtos = [ 
{ nome: "Laptop", preco: 1000 }, 
{ nome: "Tablet", preco: 400 }, 
{ nome: "Smartphone", preco: 1500 } 
];
Exemplo de chamada da função:

encontrarProdutoPorNome(produtos,"Laptop")
Saída

[
{ nome: "Laptop", preco: 1000 }
]
Exerício 6 Filtrar Produtos por Categoria

Desenvolva uma função chamada filtrarPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria. A função deve retornar um novo array contendo apenas os produtos que pertencem a uma categoria especificada.

Entrada:

const produtos = [ 
{ nome: "Laptop", categoria: "Eletrônicos" }, 
{ nome: "Camisa", categoria: "Roupas" }, 
{ nome: "Smartphone", categoria: "Eletrônicos" } 
];
Saída:

[
{ nome: "Laptop", categoria: "Eletrônicos" }, 
{ nome: "Smartphone", categoria: "Eletrônicos" }
]
Exercício 7 Verificar Disponibilidade de Estoque

Desenvolva uma função chamada verificarEstoque que receba um array de objetos representando produtos, onde cada produto tem uma propriedade quantidadeEmEstoque. A função deve retornar um array contendo apenas os produtos que têm quantidade em estoque maior que zero.

Exemplo de uso:

Entrada:

const produtos = [ 
{ nome: "Laptop", quantidadeEmEstoque: 5 }, 
{ nome: "Tablet", quantidadeEmEstoque: 0 }, 
{ nome: "Smartphone", quantidadeEmEstoque: 3 } 
];
Saída:

[
{ nome: "Laptop", quantidadeEmEstoque: 5 }, 
{ nome: "Smartphone", quantidadeEmEstoque: 3 }
]
Exercício 8 Calcular Total de Itens

Crie uma função chamada calcularTotalItens que receba um array de objetos representando itens de um carrinho de compras, onde cada objeto tem uma propriedade quantidade e precoUnitario. A função deve retornar o valor total dos itens no carrinho.

Exemplo de uso:

Entrada:

const itens = [ 
{ nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
{ nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
{ nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];
Saída:

2300
Exercício 9 Agrupar Produtos por Categoria

Desenvolva uma função chamada agruparPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria e uma propriedade nome. A função deve retornar um objeto onde as chaves são as categorias e os valores são arrays contendo os nomes dos produtos pertencentes a cada categoria.

Exemplo de uso:

Entrada:

const produtos = [ 
{ nome: "Laptop", categoria: "Eletrônicos" }, 
{ nome: "Camisa", categoria: "Roupas" }, 
{ nome: "Smartphone", categoria: "Eletrônicos" }, 
{ nome: "Calça", categoria: "Roupas" }, 
{ nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
];
Saída:

{
"Eletrônicos": ["Laptop", "Smartphone", "Fone de Ouvido"],
"Roupas": ["Camisa", "Calça"]
}
Exercício 10 Criar um Projeto React com Vite e Exibir "Hello World"

Crie um novo projeto React utilizando Vite. Após a criação do projeto, edite o arquivo src/App.jsx para que ele exiba a mensagem "Hello World" na tela principal. Certifique-se de que o aplicativo está funcionando corretamente e a mensagem é visível no navegador.

Exercício 11 Criar Componente de Saudação

Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um novo componente funcional chamado Saudacao que exiba a mensagem "Olá, Mundo!" em um elemento <h1>. Em seguida, importe e utilize esse componente no arquivo src/App.jsx, substituindo o conteúdo existente. Garanta que a mensagem "Olá, Mundo!" seja exibida corretamente na tela principal ao rodar o aplicativo.

Exercício 12 Criar uma Lista de Tarefas com Vite

Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado ListaTarefas que contenha um array estático de tarefas e exiba cada tarefa em um elemento <li> dentro de uma lista ordenada (<ol> ). Use o método map para iterar sobre o array e renderizar cada tarefa. Utilize o seguinte array de tarefas:

const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];
Inclua este array diretamente no componente ListaTarefas e renderize a lista de tarefas na tela. Após criar o componente, importe-o e utilize-o no arquivo src/App.jsx . Verifique se a lista de tarefas é exibida corretamente.

Exercício 13 Criar um Componente de Galeria de Imagens

Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado GaleriaImagens que exiba uma galeria de imagens utilizando um array estático de objetos. Cada objeto deve conter uma URL de imagem e uma legenda. Utilize o método map para iterar sobre o array e renderizar cada imagem junto com sua legenda.

Utilize o seguinte array estático de objetos para as imagens:

const imagens = [ 
{ url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' }, 
{ url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' }, 
{ url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' } 
];
No componente GaleriaImagens, renderize cada imagem dentro de um elemento <div> com uma classe CSS para estilizar a galeria, e inclua a legenda abaixo da imagem. Crie um arquivo CSS chamado GaleriaImagens.css e adicione estilos para centralizar as imagens e exibir as legendas de forma clara.

Após criar e estilizar o componente, importe-o e utilize-o no arquivo src/App.jsx. Verifique se a galeria de imagens é exibida corretamente e se as imagens estão centralizadas com suas legendas.

Exercício 14 Criar um Componente de Cartão de Perfil

Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado CartaoPerfil que exiba um cartão de perfil com informações estáticas. O componente deve ter a seguinte estrutura:

Informações do Perfil:
Um título com o nome do usuário.
Uma descrição com uma breve biografia.
Uma imagem de perfil.
Crie um arquivo CSS chamado CartaoPerfil.css e adicione estilos para o cartão de perfil. Os estilos devem garantir que o cartão tenha uma aparência profissional e limpa. 

Depois de criar o componente CartaoPerfil e estilizar com CSS, importe-o e utilize-o no arquivo src/App.jsx. Certifique-se de que o cartão de perfil é exibido corretamente e estilizado conforme as especificações.

Exercício 15 Criar um Portfólio com React

Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado Portfólio que exiba um portfólio simples com as seguintes seções estáticas:

Cabeçalho:
Um título com o nome do portfólio (por exemplo, "Meu Portfólio").
Um subtítulo com uma breve descrição (por exemplo, "Desenvolvedor Front-end com experiência em React").
Projetos:
Uma seção que liste três projetos fictícios com títulos e descrições curtas.
Contatos:
Uma seção que exiba informações de contato fictícias (por exemplo, e-mail e redes sociais).
Os itens de Cabeçalho, Projetos e Contatos, devem ser criados em componentes isolados e chamados no arquivo App.js.

Exercício 16 Criar uma Lista de Produtos com Cartão de Produto

Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado ListaProdutos. Este componente deve exibir uma lista de produtos usando um array estático e o método map para gerar um cartão de produto para cada item.

Utilize o seguinte array estático para os produtos:

const produtos = [ 
 {
nome: "Tênis de Corrida", 
descricao: "Tênis confortável para corridas diárias.", 
preco: "R$ 299,90", 
imagem: "https://via.placeholder.com/150" 
 },
 { 
nome: "Camisa de Ciclismo", 
descricao: "Camisa respirável para ciclistas.", 
preco: "R$ 129,90", 
imagem: "https://via.placeholder.com/150" 
}, 
{ 
nome: "Boné Esportivo", 
descricao: "Boné ajustável para proteção solar.", 
preco: "R$ 59,90", 
imagem: "https://via.placeholder.com/150" 
}
];
O componente ListaProdutos deve utilizar o método map para renderizar um componente CartaoProduto para cada item no array. O componente CartaoProduto deve incluir:

Imagem do Produto
Nome do Produto
Descrição
Preço
Crie um arquivo CSS chamado CartaoProduto.css para estilizar o cartão de produto, garantindo que ele tenha uma aparência profissional e organizada.
