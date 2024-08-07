import React from 'react';
import img from './eu-linkedin.jpeg';
import './CartaoPerfil.css';

function CartaoPerfil() {
  return (
    <div className='cartao-perfil'>
      <h2>Tales Sabini</h2>
      <img src={img} alt='minha foto do linkedin' className='cartao-img' />
      <p className='cartao-desc'>
        Olá, eu sou Tales tenho 18 anos, começei a estudar programação no começo
        de 2024.
        <br />
        gosto de programar em golang e gosto da parte de criar apis mas estudo a
        parte de front end também, eu... uso neovim...
      </p>
    </div>
  );
}

export { CartaoPerfil };
