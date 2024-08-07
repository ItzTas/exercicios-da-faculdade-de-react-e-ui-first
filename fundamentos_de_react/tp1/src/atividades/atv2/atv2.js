function filtrarDisponiveis(produtos) {
  return produtos.filter((prod) => prod.disponivel);
}

export { filtrarDisponiveis };
