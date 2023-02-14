import fotoHtml from '../assets/img/portada2.jpg';
import '../styles/Html.css';

const Html = () => {
    return (
        <div id='ht' className='div-html'>
            <h2 className='titulo-seccion'>HTML/CSS</h2>
            <a href="https://manusucaria.github.io/Fuga/" target="_blank" rel="noopener noreferrer" className='contenedor-img'>
                <img className= "foto-html" src={fotoHtml} alt="Foto de Portada" />
            </a>
        </div>
    )
}

export default Html;