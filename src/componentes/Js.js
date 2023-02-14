import fotoJs from '../assets/img/portada3.jpg';
import '../styles/Js.css';

const Js = () => {
    return (
        <div id='js' className='div-js'>
            <h2 className='titulo-seccion'>JS</h2>
            <a href="https://manusucaria.github.io/Escalada/" target="_blank" rel="noopener noreferrer" className='contenedor-img'>
                <img className= "foto-js" src={fotoJs} alt="Foto de Js" />
            </a>
        </div>
    )
}

export default Js;