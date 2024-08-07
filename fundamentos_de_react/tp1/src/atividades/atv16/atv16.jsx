import React from 'react';
import './atv16.css';

function ListaProdutos() {
  const produtos = [
    {
      nome: 'Tênis de Corrida',
      descricao: 'Tênis confortável para corridas diárias.',
      preco: 'R$ 299,90',
      imagem:
        'https://cdn.awsli.com.br/600x450/1575/1575512/produto/105899702/08364116fd.jpg',
    },
    {
      nome: 'Camisa de Ciclismo',
      descricao: 'Camisa respirável para ciclistas.',
      preco: 'R$ 129,90',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANien3dSr6_tjlvRqCICw2wrGrLN4lphHdA&s',
    },
    {
      nome: 'Boné Esportivo',
      descricao: 'Boné ajustável para proteção solar.',
      preco: 'R$ 59,90',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiR-ohocuasEabUdA3tpvJFlyZYV9J07zygw&s',
    },
  ];

  return (
    <ol>
      {produtos.map((prod, i) => {
        return (
          <div key={i} className='prod-card'>
            <img className='prod-img' src={prod.imagem} alt={prod.descricao} />
            <h2 className='prod-name'>{prod.nome}</h2>
            <p className='prod-desc'>{prod.descricao}</p>
            <p className='prod-price'>{prod.preco}</p>
          </div>
        );
      })}
    </ol>
  );
}

export { ListaProdutos };
