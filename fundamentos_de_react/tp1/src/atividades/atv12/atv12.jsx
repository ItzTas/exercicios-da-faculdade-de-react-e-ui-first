import React from 'react';

function ListaTarefas() {
  const tarefas = ['Comprar café', 'Estudar React', 'Fazer exercícios'];
  return (
    <ol>
      {tarefas.map((tar, idx) => (
        <li key={idx}> {tar}</li>
      ))}
    </ol>
  );
}

export { ListaTarefas };
