function agruparPorCategoria(produtos) {
  let resultado = {};
  for (const { nome, categoria } of produtos) {
    if (!resultado[categoria]) {
      resultado[categoria] = [nome];
      continue;
    }

    resultado[categoria].push(nome);
  }

  return resultado;
}

export { agruparPorCategoria };
