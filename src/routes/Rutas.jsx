import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Person from '../componentes/Person'

function Rutas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route exact path="/:id" element={<Person/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;