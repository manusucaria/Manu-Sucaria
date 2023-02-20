import flecha from '../assets/img/flecha.png';
import {useState, useEffect} from 'react';
import '../styles/Tech.css';

const iframe = '<iframe src="https://manusucaria.github.io/Escalada/" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const texto = "Web desarollada usando Vanilla Javascript para una empresa de cerveza artesanal. Incluye Bootstrap, Sass y otros frameworks y librerías. Full responsive y utiliza el Local Host para guardar información de órdenes y usuarios. Click para dirigirte a la página. // Web developed using Vanila Javascript for a Beer Company project. It includes Bootstrap, Sass and other frameworks and libraries. Full responsive and uses Local Host in order to save orders and user info. Click here to navigate.";

const Js = () => {
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
        <div id='js' className='div-js'>
            <div className='contenedor-iframe'>
                <img className='flecha' src={flecha} alt="Flecha" />
                <p onClick={detalles} className='link'>JS</p>
            </div>
            <div className='contenedor-img'>
                {links === 0? <div></div>
                :
                <div className='contenedor-link-pagina'>
                    <a className='link-pagina' href="https://manusucaria.github.io/Escalada/" target="_blank" rel="noopener noreferrer">{text1}</a>
                </div>
                }
                <Iframe className="iframe" iframe={iframe} />
            </div>
        </div>
    )
}

export default Js;