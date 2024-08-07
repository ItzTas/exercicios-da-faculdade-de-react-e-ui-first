function filtrarPorCategoria(objetos, categoria) {
  return objetos.filter((obj) => obj.categoria === categoria);
}

export { filtrarPorCategoria };
