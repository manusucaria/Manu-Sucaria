import { useState } from 'react';
import { Link } from 'react-router-dom';
import Html from '../componentes/Html.js';
import Js from '../componentes/Js.js';
import React from '../componentes/React.js';
import Autor from '../componentes/Autor.js';
import Footer from '../componentes/Footer.js';
import '../styles/Home.css';

const Home = () => {
    const [tecnologias, setTecnologias] = useState(0);
    function menu () {
        tecnologias === 1? setTecnologias(0): setTecnologias(1);
    }
    return (
        <div className='home'>
            <div className='contenedor-divs'>
                {tecnologias === 0?
                <div className='contenedor-tecnologias'>
                    <p onClick={menu} className='tecno'>Technologies</p>
                </div>:
                <div className='contenedor-tecnologias2'>
                    <p onClick={menu} className='tecnoLista'>Technologies</p>
                    <a href="#ht" rel="noopener noreferrer" className='html-link'><p className='html'>HTML/CSS</p></a>
                    <a href="#js" rel="noopener noreferrer" className='js-link'><p className='js'>JS</p></a>
                    <a href="#re" rel="noopener noreferrer" className='react-link'><p className='react'>React</p></a>
                </div>
                }
                <div className='div-1'><p></p></div>
                <div className='div-2'><p></p></div>
                <div className='div-3'>
                    <div className='contenedor-titulos' to={process.env.PUBLIC_URL + "/"}>
                        <Link to={process.env.PUBLIC_URL + "/"} className='titulo-portfolio'>MANUEL ANDRÉS SUCARÍA</Link>
                        <Link to={process.env.PUBLIC_URL + "/"} className='texto-portfolio'>FRONT-END DEVELOPER</Link>
                    </div>
                </div>
                <div className='div-4'><p></p></div>
                <div className='div-5'><p></p></div>
            </div>
            <Html />
            <Js />
            <React />
            <Autor />
            <Footer />
        </div>
    )
}

export default Home