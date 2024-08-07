import './App.css';
import React from 'react';
import { calcularPrecoTotal } from './atividades/atv1/atv1.js';
import { filtrarDisponiveis } from './atividades/atv2/atv2.js';
import { calcularMediaAvaliacoes } from './atividades/atv3/atv3.js';
import { filtrarAcimaPrecos } from './atividades/atv4/atv4.js';
import { encontrarProdutoPorNome } from './atividades/atv5/atv5.js';
import { filtrarPorCategoria } from './atividades/atv6/atv6.js';
import { verificarEstoque } from './atividades/atv7/atv7.js';
import { calcularTotalItens } from './atividades/atv8/atv8.js';
import { agruparPorCategoria } from './atividades/atv9/atv9.js';
import { HelloWorld } from './atividades/atv10/atv10.jsx';
import { Saudacao } from './atividades/atv11/atv11.jsx';
import { ListaTarefas } from './atividades/atv12/atv12.jsx';
import { GaleriaImagens } from './atividades/atv13/atv12.jsx';
import { CartaoPerfil } from './atividades/atv14/atv14.jsx';

export default function App() {
  return (
    <main>
      <section>
        <h2 className='atividade-num'>Atividade 1</h2>
        <p>{calcularPrecoTotal(2, 2)}</p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 2</h2>
        <p>
          {JSON.stringify(
            filtrarDisponiveis([
              { nome: 'Laptop', disponivel: true },
              { nome: 'Tablet', disponivel: false },
              { nome: 'Smartphone', disponivel: true },
            ])
          )}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 3</h2>
        <p>{calcularMediaAvaliacoes([80, 70, 50, 60])}</p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 4</h2>
        <p>
          {JSON.stringify(
            filtrarAcimaPrecos(
              [
                { nome: 'Laptop', preco: 1000 },
                { nome: 'Tablet', preco: 400 },
                { nome: 'Smartphone', preco: 1500 },
              ],
              600
            )
          )}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 5</h2>
        <p>
          {JSON.stringify(
            encontrarProdutoPorNome(
              [
                { nome: 'Laptop', preco: 1000 },
                { nome: 'Tablet', preco: 400 },
                { nome: 'Smartphone', preco: 1500 },
              ],
              'Laptop'
            )
          )}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'> Atividade 6</h2>
        <p>
          {JSON.stringify(
            filtrarPorCategoria(
              [
                { nome: 'Laptop', categoria: 'Eletrônicos' },
                { nome: 'Camisa', categoria: 'Roupas' },
                { nome: 'Smartphone', categoria: 'Eletrônicos' },
              ],
              'Eletrônicos'
            )
          )}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 7</h2>
        <p>
          {JSON.stringify(
            verificarEstoque([
              { nome: 'Laptop', quantidadeEmEstoque: 5 },
              { nome: 'Tablet', quantidadeEmEstoque: 0 },
              { nome: 'Smartphone', quantidadeEmEstoque: 3 },
            ])
          )}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 8</h2>
        <p>
          {calcularTotalItens([
            { nome: 'Laptop', quantidade: 1, precoUnitario: 1000 },
            { nome: 'Tablet', quantidade: 2, precoUnitario: 400 },
            { nome: 'Smartphone', quantidade: 1, precoUnitario: 1500 },
          ])}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 9</h2>
        <p>
          {JSON.stringify(
            agruparPorCategoria([
              { nome: 'Laptop', categoria: 'Eletrônicos' },
              { nome: 'Camisa', categoria: 'Roupas' },
              { nome: 'Smartphone', categoria: 'Eletrônicos' },
              { nome: 'Calça', categoria: 'Roupas' },
              { nome: 'Fone de Ouvido', categoria: 'Eletrônicos' },
            ])
          )}
        </p>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 10</h2>
        <HelloWorld />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 11</h2>
        <Saudacao />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 12</h2>
        <ListaTarefas />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 13</h2>
        <GaleriaImagens />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 14</h2>
        <CartaoPerfil />
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 15</h2>
      </section>
      <section>
        <h2 className='atividade-num'>Atividade 16</h2>
      </section>
    </main>
  );
}
