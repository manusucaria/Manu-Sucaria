import '../styles/React.css';

const iframe = '<iframe src="https://manusucaria.github.io/dulcecapricho/" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const React = () => {
    return (
        <div id='re' className='div-react'>
            <a className='link-iframe' href="https://manusucaria.github.io/dulcecapricho/" target="_blank" rel="noopener noreferrer"><h2 className='titulo-seccion'>REACT</h2></a>
            <div className='contenedor-img'>
                <Iframe className="iframe" iframe={iframe} />,
            </div>
        </div>
    )
}

export default React;