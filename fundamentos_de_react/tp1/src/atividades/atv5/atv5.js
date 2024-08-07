function encontrarProdutoPorNome(produtos, nome) {
  return produtos.find((prod) => prod.nome === nome);
}

export { encontrarProdutoPorNome };
