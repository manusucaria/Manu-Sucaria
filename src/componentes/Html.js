import '../styles/Tech.css';
import flecha from '../assets/img/flecha.png';
import {useState, useEffect} from 'react';

const iframe = '<iframe src="https://manusucaria.github.io/Fuga/" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const texto = "Web desarrollada usando solo HTML y CSS para una empresa de diseño de moda. Incluye Bootstrap, Sass y otros frameworks y librerías. Click para dirigirte a la página. // Web developed using only with HTML and CSS for a fashion design project. It includes Bootstrap, Sass and other frameworks and libraries. Full responsive. Click here to navigate.";

const Html = () => {
    const [links, setLinks] = useState(0);
    function detalles () {
        links === 1? setLinks(0): setLinks(1);
    }
    const [text1, setText1] = useState("");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText1(texto.slice(0, text1.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
    }, [text1]);
    return (
        <div id='ht' className='div-html'>
            <div className='contenedor-iframe'>
                <img className='flecha' src={flecha} alt="Flecha" />
                <p onClick={detalles} className='link'>HTML/CSS</p>
            </div>
            <div className='contenedor-img'>
                {links === 0? <Iframe className="iframe" iframe={iframe} />
                :
                <div className='contenedor-link-pagina'>
                    <a className='link-pagina' href="https://manusucaria.github.io/Fuga/" target="_blank" rel="noopener noreferrer">{text1}</a>
                </div>
                }
            </div>
        </div>
    )
}

export default Html;