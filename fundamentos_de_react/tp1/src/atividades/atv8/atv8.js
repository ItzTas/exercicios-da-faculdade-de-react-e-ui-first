function calcularTotalItens(items) {
  return items.reduce((tot, item) => {
    return tot + item.precoUnitario * item.quantidade;
  }, 0);
}

export { calcularTotalItens };
