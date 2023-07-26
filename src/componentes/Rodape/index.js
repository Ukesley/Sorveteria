import React from 'react';
import './rodape.css';

function Rodape() {
    return (
        <footer>
            <div className='footer'>
                <img src='assets/logo.png'/>
                <div className='info'>
                    <h3>ENDEREÇO</h3>
                    <p>Av.Bernardino de Campos, 98 <br/> São Paulo, SP 12345-678</p>
                </div>
                <div className='info'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 345-67890</p>
                </div>
                <div className='info'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <p className='paragrafo-nome-programador'>Gelateria. Orgulhosamente desenvolvido por Kesley Nunes</p>
        </footer>
    );
}

export default Rodape;