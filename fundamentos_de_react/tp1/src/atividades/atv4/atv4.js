function filtrarAcimaPrecos(produtos, preco) {
  return produtos.filter((prod) => prod.preco > preco);
}

export { filtrarAcimaPrecos };
