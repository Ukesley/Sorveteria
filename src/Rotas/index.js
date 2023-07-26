import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Paginas/Home/';
import Sabores from '../Paginas/Sabores/';
import Sobre from '../Paginas/Sobre/';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/paginaSabores' element={ <Sabores/> }/>
                <Route path='/paginaSobre' element={ <Sobre/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;