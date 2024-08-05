import './App.css';
import React from 'react';
import Ex1atv1 from './atv1/ex1/ex1atv1';
import Ex2atv1 from './atv1/ex2/ex2atv1';
import Ex1atv2 from './atv2/ex1/ex1atv2';
import Ex2atv2 from './atv2/ex2/ex2atv2';
import Ex3atv2 from './atv2/ex3/ex3atv2';
import Ex1atv3 from './atv3/ex1/ex1atv3';
import Ex2atv3 from './atv3/ex2/ex2atv3';

export default function App() {
  return (
    <main>
      <section>
        <h2 className='atividade-num'>Atividade 1</h2>
        <Ex1atv1 />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 2</h2>
        <Ex2atv1 />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 3</h2>
        <Ex1atv2 />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 4</h2>
        <Ex2atv2 />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 5</h2>
        <Ex3atv2 />
      </section>
      <section>
        <h2 className='atividade-num'> Atividade 6</h2>
        <Ex1atv3 />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 7</h2>
        <Ex2atv3 />
      </section>
    </main>
  );
}
