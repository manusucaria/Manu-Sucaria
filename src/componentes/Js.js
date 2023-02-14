import '../styles/Js.css';

const iframe = '<iframe src="https://manusucaria.github.io/Escalada/" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const Js = () => {
    return (
        <div id='js' className='div-js'>
            <a className='link-iframe' href="https://manusucaria.github.io/Escalada/" target="_blank" rel="noopener noreferrer"><h2 className='titulo-seccion'>JS</h2></a>
            <div className='contenedor-img'>
                <Iframe className="iframe" iframe={iframe} />,
            </div>
        </div>
    )
}

export default Js;