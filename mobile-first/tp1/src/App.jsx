import './App.css';
import React from 'react';
import Ex1atv1 from './atv1/ex1/ex1atv1';
import Ex2atv1 from './atv1/ex2/ex2atv1';

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
    </main>
  );
}
