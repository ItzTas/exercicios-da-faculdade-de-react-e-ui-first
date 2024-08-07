import React from 'react';
import './atv15.css';

function Portifolio() {
  return (
    <div className='portifolio'>
      <header className='portifolio-header'>
        <h2>Tales Sabini</h2>
        <h3>Desenvolvedor full stack com experiencia em golang</h3>
      </header>
      <section className='projetos'>
        <h2>projetos</h2>
        <ul>
          <a href='https://github.com/ItzTas/coiner_api'>
            <li className='project-container'>
              <h2>coiner_api</h2>
            </li>
          </a>
          <a href='https://github.com/ItzTas/palindrome-checker'>
            <li className='project-container'>
              <h2>palindrome-checker</h2>
            </li>
          </a>
          <a href='https://github.com/ItzTas/TSTS-telegram-bot'>
            <li className='project-container'>
              <h2>telegram-bot</h2>
            </li>
          </a>
        </ul>
      </section>
      <section className='contatos'>
        <ul>
          <li>
            <a href='https://github.com/ItzTas'>Github</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/tales-sabini-4481641a0'>
              Linkedin
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { Portifolio };
