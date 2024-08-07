function calcularMediaAvaliacoes(notas) {
  const result = notas.reduce((total, aval) => total + aval, 0);
  return result / notas.length;
}

export { calcularMediaAvaliacoes };
