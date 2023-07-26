import React from 'react';
import './home.css';

import Topo from '../../componentes/Topo/';
import Footer from '../../componentes/Rodape/';

function Home() {
    return (
        <div className='home'>
            <Topo />

            <section className='banner'>
                <h1>SORVETE ARTESANAL</h1>
            </section>

            <section className='secoes'>
                <img src='assets/banner-sabores.jpg' />

                <div className='texto'>
                    <h2>Nossos produtos</h2>
                    <p className='paragrafo-destaque'>Novos e deliciosos!</p>
                    <p className='paragrafo-menor'>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                    </p>
                </div>
            </section>

            <section className='secoes secao-inverte'>
                <div className='texto'>
                    <h2>NOSSOS EVENTOS</h2>
                    <p className='paragrafo-destaque'>Delicias com sorvete!</p>
                    <p className='paragrafo-menor'>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>

                <img src='assets/eventos-image.jpg' />
            </section>

            <section className='secoes'>
                <img src='assets/sobre-image.jpg' />

                <div className='texto'>
                    <h2>SOBRE NÓS</h2>
                    <p className='paragrafo-destaque'>Alegria em cada casquinha!</p>
                    <p className='paragrafo-menor'>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;