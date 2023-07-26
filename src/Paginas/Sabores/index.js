import React from 'react';
import './sabores.css';

import Topo from '../../componentes/Topo/';
import Footer from '../../componentes/Rodape/';

function Sabores() {
    return (
        <div className='sabor'>

            <Topo />

            <section className='banner-sabor'>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className='secao-cards'>
                <h2>SABORES DE SORVETE</h2>
                <div className='box-card'>

                    <div className='box-engloba'>
                        <div className='oreo card'>
                            <img src='assets/sabor-oreo.png' />
                            <h4>Sorvete de Oreo</h4>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className='pistache card'>
                            <img src='assets/sabor-pistache.png' />
                            <h4>Sorvete Pistache</h4>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de sementes.</p>
                        </div>
                        <div className='cookie-avela card'>
                            <img src='assets/sabor-cookies-avela.png' />
                            <h4>Sorvete Cookies & Avelã</h4>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>

                    <div className='box-engloba'>
                        <div className='kiwi card'>
                            <img src='assets/sorbet-kiwi.png' />
                            <h4>Sorvete de Kiwi</h4>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className='morango card'>
                            <img src='assets/sorbet-morango.png' />
                            <h4>Sorvete de Morango</h4>
                            <p>Sorvete de morango gourmet. Tradicionale saboroso.</p>
                        </div>
                        <div className='limao card'>
                            <img src='assets/sorbet-limao.png' />
                            <h4>Sorvete de Limão Siciliano</h4>
                            <p>O incrivel sorvete gourmet de limão sicilianovai te encantar.</p>
                        </div>
                    </div>

                </div>
            </section >

        <Footer />
        </div >
    );
}

export default Sabores;