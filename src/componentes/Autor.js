import {useEffect, useState} from 'react';
import '../styles/Autor.css';

const texto = "Soy Manuel Sucaría, programador front-end que reside en Ingeniero Maschwitz, Buenos Aires, Argentina. Me encuentro en constante búsqueda de nuevas tecnologías y feliz de poder seguir creciendo profesionalmente. I'm Manuel Sucaria, front-end developer who lives in Ingeniero Maschwitz, Buenos Aires, Argentina. I'm looking forward to constantly develop in new technologies and happy of being able to continue growing as a professional.";
const Autor = () => {
    const [text1, setText1] = useState("");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText1(texto.slice(0, text1.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
    }, [text1]);
    return (
        <div className='div-autor'>
            <h2 className='titulo-seccion'>Autor/Author</h2>
            <p className='texto-autor'>{text1}</p>
            <div className='datos'>
                <p className='cel'>Cel: +54 (9) 011 1556306090</p>
                <p className='mail'>Mail: manusucaria@gmail.com</p>
            </div>

        </div>
    )
}

export default Autor;