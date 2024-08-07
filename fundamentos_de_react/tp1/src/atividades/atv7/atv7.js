function verificarEstoque(produtos) {
  return produtos.filter((prod) => prod.quantidadeEmEstoque > 0);
}

export { verificarEstoque };
