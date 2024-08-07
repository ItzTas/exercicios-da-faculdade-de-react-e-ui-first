import React from 'react';
import './GaleriaImagens.css';

function GaleriaImagens() {
  const imagens = [
    {
      url: 'https://w.wallhaven.cc/full/72/wallhaven-72yzje.jpg',
      legenda: 'uma linda foto de uma praia e uma mulher',
    },
    {
      url: 'https://w.wallhaven.cc/full/85/wallhaven-856dlk.png',
      legenda: 'imagem de uma caveira',
    },
    {
      url: 'https://w.wallhaven.cc/full/d6/wallhaven-d6yrml.jpg',
      legenda: 'imagem da malenia do jogo elden ring',
    },
  ];

  return (
    <div className='gallery'>
      {imagens.map((img, i) => {
        return (
          <div className='gallery-item' key={i}>
            <img className='gallery-img' src={img.url} alt={img.legenda} />
            <p className='legenda'>{img.legenda}</p>
          </div>
        );
      })}
    </div>
  );
}

export { GaleriaImagens };
