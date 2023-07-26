import React from 'react';
import { Link } from 'react-router-dom';
import './topo.css';

function Topo() {
    return (
        <header className='nav'>
            <img src='assets/logo.png'/>

            <ul type='none'>
                <li>
                    <Link className='link' to='/'> Home </Link>
                </li>
                <li>
                    <Link className='link link-sabor' to='/paginaSabores'> Sabores </Link>
                </li>
                <li>
                    <Link className='link link-sobre' to='/paginaSobre'> Sobre </Link>
                </li>
            </ul>
        </header>
    )
}

export default Topo;