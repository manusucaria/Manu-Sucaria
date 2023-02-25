import flecha from '../assets/img/flecha.png';
import {useState, useEffect} from 'react';
import '../styles/Tech.css';

const iframe = '<iframe src="https://manusucaria.github.io/dulcecapricho/" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const texto = "Web desarrollada en React para una empresa de Pastelería. Incluye Firebase y otros frameworks y Librerías. Full responsive, y utiliza Firebase para guardar órdenes e información de usuarios, asi como también para actualizar nuevos productos. Click para dirigirte a la página. // Web developed using React for a Cake Shop Company project. It includes Firebase and other frameworks and libraries. It's full responsive and uses Firebase in order to save orders and user info, and also to update new products. Click here to navigate.";

const React = () => {
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
        <div id='re' className='div-react'>
            <div className='contenedor-iframe'>
                <img className='flecha' src={flecha} alt="Flecha" />
                <p onClick={detalles} className='link'>REACT</p>
            </div>
            <div className='contenedor-img'>
                {links === 0? <div></div>
                :
                <div className='contenedor-link-pagina'>
                    <a href="https://dulcecapricho.netlify.app" target="_blank" rel="noopener noreferrer" className='link-pagina'>{text1}</a>
                </div>
                }
                <Iframe className="iframe" iframe={iframe} />
            </div>
        </div>
    )
}

export default React;