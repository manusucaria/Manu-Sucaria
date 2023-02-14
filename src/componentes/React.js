import fotoReact from '../assets/img/portada2.jpg';
import '../styles/React.css';

const React = () => {
    return (
        <div id='re' className='div-react'>
            <h2 className='titulo-seccion'>REACT</h2>
            <a href="https://manusucaria.github.io/dulcecapricho/" target="_blank" rel="noopener noreferrer" className='contenedor-img'>
                <img className= "foto-react" src={fotoReact} alt="Foto de React" />
            </a>
        </div>
    )
}

export default React;