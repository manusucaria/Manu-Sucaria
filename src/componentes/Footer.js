import ig from '../assets/img/instagram.ico';
import gi from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin1.png';
import copyright from '../assets/img/copyright.ico';
import '../styles/Footer.css';

const Js = () => {
    return (
        <div className='footer'>
            <div className='contenedor-redes'>
                <a href="https://www.instagram.com/manusucaria" target="_blank" rel="noopener noreferrer" className="instagram"><img className= "ins" src={ig} alt="Link de Isntagram" /></a>
                <a href="https://github.com/manusucaria" target="_blank" rel="noopener noreferrer" className="github"><img className= "gi" src={gi} alt="Link de GIthub" /></a>
                <a href="https://www.linkedin.com/in/manu-sucaria" target="_blank" rel="noopener noreferrer" className="linkedin"><img className= "lk" src={linkedin} alt="Link de Linkedin" /></a>
            </div>
            <div className="copyright">
                <img className="foto-copyright" src={copyright} alt="Copyright" />
                <p className='texto-copy'>2023 Manu Sucaria</p>
            </div>
        </div>
    )
}

export default Js;